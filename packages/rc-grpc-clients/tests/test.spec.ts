import { User } from '../src/generated/io/restorecommerce/user';
import { Image } from '../src/generated/io/restorecommerce/image';
import { Tokens } from '../src/generated/io/restorecommerce/auth';

const reEncode = (u: User): User => {
  return User.decode(User.encode(u).finish());
};

describe('a user client', () => {
  describe('scalar encoding', () => {
    it('should re-encode set values', () => {
      const u = reEncode(User.fromPartial({
        email: 'foo@bar.com',
        active: false,
        guest: true,
        firstName: '',
      }));

      expect(u.email).toEqual('foo@bar.com');
      expect(u.active).toEqual(false);
      expect(u.guest).toEqual(true);
      expect(u.firstName).toEqual('');
    });

    it('should re-encode missing values', () => {
      const u = reEncode(User.fromPartial({}));

      expect(u.email).toBeUndefined();
      expect(u.active).toBeUndefined();
      expect(u.guest).toBeUndefined();
      expect(u.firstName).toBeUndefined();
    });
  });

  describe('message encoding', () => {
    it('should re-encode set values', () => {
      const u = reEncode(User.fromPartial({
        image: Image.fromPartial({
          id: 'foo'
        })
      }));

      expect(u.image?.id).toEqual('foo');
    });

    it('should re-encode missing values', () => {
      const u = reEncode(User.fromPartial({}));

      expect(u.image).toEqual(undefined);
    });
  });

  describe('repeated encoding', () => {
    it('should re-encode set values', () => {
      const u = reEncode(User.fromPartial({
        tokens: [Tokens.fromPartial({
          token: 'foo'
        })]
      }));

      expect(u.tokens?.[0].token).toEqual('foo');
    });

    /*it('should re-encode empty values', () => {
      const u = reEncode(User.fromPartial({
        tokens: []
      }));

      expect(u.tokens).not.toBeUndefined();
      expect(u.tokens?.length).toEqual(0);
    });*/

    it('should re-encode missing values', () => {
      const u = reEncode(User.fromPartial({}));

      expect(u.tokens).toBeUndefined();
    });
  });
});
