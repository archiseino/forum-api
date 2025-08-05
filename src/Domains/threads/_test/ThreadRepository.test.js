const ThreadRepository = require('../ThreadRepository');

describe('ThreadRepository interface', () => {
  it('should throw error when addThread method is not implemented', async () => {
    // Arrange
    const threadRepository = new ThreadRepository();

    // Action and Assert
    await expect(threadRepository.addThread({})).rejects.toThrow(
      'THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED'
    );

    await expect(threadRepository.verifyThreadExist('')).rejects.toThrow(
      'THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED'
    );

    await expect(threadRepository.getThreadById('')).rejects.toThrow(
      'THREAD_REPOSITORY.METHOD_NOT_IMPLEMENTED'
    );
  });
});
