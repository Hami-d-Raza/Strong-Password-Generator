function generatePassword() {
    const asciiLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const punctuation = '!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    const total = asciiLetters + digits + punctuation;
    const length = 16;

    let password = '';
    const crypto = window.crypto || window.msCrypto; // For IE 11 compatibility
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        password += total.charAt(array[i] % total.length);
    }

    document.getElementById('password').innerText = `Your strong password is ( ${password} )`;
}