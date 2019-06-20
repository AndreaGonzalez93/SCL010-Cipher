describe('cipher', () => { 

  it('debería ser un objeto', () => { 
    assert.equal(typeof cipher, 'object'); 
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function'); 
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33),"HIJKLMNOPQRSTUVWXYZABCDEFG" )
    });
    it ('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(window.cipher.encode("abcdefghijklmnopqrstuvwxyz", 33),"hijklmnopqrstuvwxyzabcdefg" ) 
      });
    it ('debería retornar "3456789012" para "0123456789" con offset 33', () => {
      assert.equal(window.cipher.encode("0123456789", 33),"3456789012" ) 
    });
  });

  describe('cipher.decode', () => {
    3456789012
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=> {
      assert.equal(window.cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33 ),"ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    });
    it ('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(window.cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33),"abcdefghijklmnopqrstuvwxyz" ) 
      });
    it ('debería retornar "0123456789" para "3456789012" con offset 33', () => {
        assert.equal(window.cipher.decode("3456789012", 33),"0123456789") 
      });
    

  });

});