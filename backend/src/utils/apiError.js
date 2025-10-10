/**
 * Kelas Error kustom untuk menangani error operasional yang dapat diprediksi.
 * @extends Error
 */
class ApiError extends Error {
  /**
   * @param {number} statusCode - Kode status HTTP dari error (e.g., 404, 400).
   * @param {string} message - Pesan error yang akan dikirim ke klien.
   * @param {boolean} [isOperational=true] - Flag untuk membedakan error operasional dari bug.
   * @param {string} [stack=''] - Stack trace dari error.
   */
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;