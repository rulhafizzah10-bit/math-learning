/**
 * Quiz Engine Module
 * Menangani logika quiz dan scoring
 */

export class QuizEngine {
  constructor(questions = []) {
    this.questions = questions;
    this.currentQuestion = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.answered = false;
    this.sessionId = this.generateSessionId();
  }

  /**
   * Generate unique session ID
   */
  generateSessionId() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${random}-${timestamp}`;
  }

  /**
   * Get soal saat ini
   */
  getCurrentQuestion() {
    return this.questions[this.currentQuestion];
  }

  /**
   * Select answer
   */
  selectAnswer(index) {
    if (this.answered) return false;

    this.selectedAnswer = index;
    this.answered = true;

    const correct = this.questions[this.currentQuestion].correct;
    if (index === correct) {
      this.score++;
    }

    return index === correct;
  }

  /**
   * Move to next question
   */
  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.selectedAnswer = null;
      this.answered = false;
      return true;
    }
    return false;
  }

  /**
   * Get progress
   */
  getProgress() {
    return {
      current: this.currentQuestion + 1,
      total: this.questions.length,
      percentage: ((this.currentQuestion + 1) / this.questions.length) * 100,
      score: this.score
    };
  }

  /**
   * Get final results
   */
  getResults() {
    const percentage = (this.score / this.questions.length) * 100;
    let rating = '';

    if (percentage === 100) {
      rating = 'excellent';
    } else if (percentage >= 80) {
      rating = 'excellent';
    } else if (percentage >= 60) {
      rating = 'good';
    } else if (percentage >= 40) {
      rating = 'fair';
    } else {
      rating = 'poor';
    }

    return {
      score: this.score,
      total: this.questions.length,
      percentage: percentage,
      rating: rating,
      sessionId: this.sessionId
    };
  }

  /**
   * Reset quiz
   */
  reset(newQuestions) {
    this.questions = newQuestions;
    this.currentQuestion = 0;
    this.score = 0;
    this.selectedAnswer = null;
    this.answered = false;
    this.sessionId = this.generateSessionId();
  }

  /**
   * Get state untuk local storage
   */
  saveState() {
    return {
      questions: this.questions,
      currentQuestion: this.currentQuestion,
      score: this.score,
      selectedAnswer: this.selectedAnswer,
      answered: this.answered,
      sessionId: this.sessionId
    };
  }

  /**
   * Load state dari local storage
   */
  loadState(state) {
    this.questions = state.questions;
    this.currentQuestion = state.currentQuestion;
    this.score = state.score;
    this.selectedAnswer = state.selectedAnswer;
    this.answered = state.answered;
    this.sessionId = state.sessionId;
  }
}

/**
 * QR Code Manager
 */
export class QRCodeManager {
  constructor() {
    this.sessionCode = '';
  }

  /**
   * Generate QR code dengan session ID
   */
  generateQRCode(containerId, baseUrl = window.location.origin) {
    this.sessionCode = this.generateSessionCode();
    const url = `${baseUrl}?session=${this.sessionCode}`;

    // Bersihkan container
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    // Generate QR
    if (typeof QRCode !== 'undefined') {
      QRCode.toCanvas(container, url, {
        width: 300,
        margin: 2,
        color: {
          dark: '#667eea',
          light: '#ffffff'
        }
      }, (error) => {
        if (error) console.error('QR Code error:', error);
      });
    }

    return this.sessionCode;
  }

  /**
   * Generate session code
   */
  generateSessionCode() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `${random}-${timestamp}`;
  }

  /**
   * Get current session code
   */
  getSessionCode() {
    return this.sessionCode;
  }

  /**
   * Parse session dari URL
   */
  static getSessionFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('session');
  }
}

/**
 * URL Helper
 */
export const URLHelper = {
  /**
   * Get parameter dari URL
   */
  getParam(paramName) {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName);
  },

  /**
   * Set URL dengan parameter (tanpa reload)
   */
  updateURL(key, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  },

  /**
   * Generate share URL
   */
  generateShareURL(sessionCode) {
    return `${window.location.origin}${window.location.pathname}?session=${sessionCode}`;
  }
};
