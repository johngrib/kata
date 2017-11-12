# XOR decryption
## Problem 59

### [Eng](https://projecteuler.net/problem=59)

```
Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.

For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. The user would keep the encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.

Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message. The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.

Your task has been made easy, as the encryption key consists of three lower case characters. Using cipher.txt (right click and 'Save Link/Target As...'), a file containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in the original text.
```

### [Kor](http://euler.synap.co.kr/prob_detail.php?id=59)

```
컴퓨터상의 모든 문자들은 유일한 코드값에 대응되는데, 보통 ASCII 표준이 널리 쓰입니다. 예를 들면 대문자 A는 65, 별표(*)는 42, 소문자 k는 107라는 값을 가집니다.

현대적인 암호화 기법 중에, 텍스트 파일의 내용을 ASCII 코드로 바꾸고 각 바이트를 비밀키의 값으로 XOR 시키는 것이 있습니다. 이 방법의 장점은 암호화와 복호화에 동일한 키를 사용할 수 있다는 것입니다. 예를 들어 65 XOR 42 = 107 이고, 107 XOR 42 = 65 가 됩니다.

암호문을 절대 깰 수 없도록 하려면, 암호화할 문장의 길이와 같은 무작위의 비밀키를 만들면 됩니다. 암호문과 비밀키는 따로따로 보관해둬야 하고, 그 반쪽짜리 정보 두 개를 함께 확보하지 않는 한 해독은 불가능합니다.

하지만 이 방법은 대부분의 경우 실용적이지 못하므로, 원문보다 짧은 비밀키를 사용하게 됩니다. 이런 경우 비밀키는 전체 메시지에 대해서 반복적으로 돌아가며 적용됩니다. 이 때 키의 길이는 보안상 충분할 정도로 길어야 하지만 또한 쉽게 기억할 수 있을 정도로 짧아야 한다는 미묘한 균형이 요구됩니다.

이번 문제를 위해서 준비된 암호화 키는 단 3개의 영어 소문자이고, cipher1.txt 파일에 암호화된 ASCII 코드값이 들어있습니다. 원래의 메시지는 평범한 영어 문장임을 힌트로 삼아서 암호문을 해독하고, 원문에 포함된 모든 ASCII 코드 값의 총합을 구하세요.
```
