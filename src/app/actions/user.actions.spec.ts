import * as fromUser from './user.actions';

describe('loadUsers', () => {
  it('should return an action', () => {
    expect(fromUser.loadImages.type).toBe('[Images API] Images Loaded Success');
  });
});
