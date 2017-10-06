# Poker hands
## Problem 54

### [Eng](https://projecteuler.net/problem=54)

```
In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

High Card: Highest value card.
One Pair: Two cards of the same value.
Two Pairs: Two different pairs.
Three of a Kind: Three cards of the same value.
Straight: All cards are consecutive values.
Flush: All cards of the same suit.
Full House: Three of a kind and a pair.
Four of a Kind: Four cards of the same value.
Straight Flush: All cards are consecutive values of same suit.
Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.
The cards are valued in the order:
2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

Hand	 	Player 1	 	Player 2	 	Winner
1	 	5H 5C 6S 7S KD
Pair of Fives
 	2C 3S 8S 8D TD
Pair of Eights
 	Player 2
2	 	5D 8C 9S JS AC
Highest card Ace
 	2C 5C 7D 8S QH
Highest card Queen
 	Player 1
3	 	2D 9C AS AH AC
Three Aces
 	3D 6D 7D TD QD
Flush with Diamonds
 	Player 2
4	 	4D 6S 9H QH QC
Pair of Queens
Highest card Nine
 	3D 6D 7H QD QS
Pair of Queens
Highest card Seven
 	Player 1
5	 	2H 2D 4C 4D 4S
Full House
With Three Fours
 	3C 3D 3S 9S 9D
Full House
with Three Threes
 	Player 1
The file, poker.txt, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

How many hands does Player 1 win?
```

### [Kor](http://euler.synap.co.kr/prob_detail.php?id=54)

```
포커라는 카드게임은 다섯 장으로 된 패의 높고 낮음에 따라 승부를 냅니다. (포커 규칙을 이미 아는 분이라면 규칙 설명 부분은 건너뛰셔도 좋습니다)

카드 한 장은 아래와 같은 순서대로 값이 높아집니다.

2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
다섯 장으로 이루어진 패의 계급(세칭 "족보")은, 낮은 것부터 높은 순서로 아래와 같습니다.

High Card : 가장 높은 카드의 값으로 비교.
One Pair : 한 쌍이 같은 카드.
Two Pairs : 서로 다른 두 쌍이 같은 카드.
Three of a Kind : 세 장이 같은 카드.
Straight : 모든 카드가 연속된 숫자.
Flush : 모든 카드의 무늬가 같음.
Full House : 세 장이 같고, 또 한 쌍이 같음 (Three of a Kind + One Pair).
Four of a Kind : 네 장이 같은 카드.
Straight Flush : 모든 카드가 연속된 숫자이면서 무늬도 같음.
Royal Flush : 10, J, Q, K, A가 무늬도 같음.
두 사람의 패가 같은 종류의 계급이라면, 계급을 구성하는 카드 중 높은 쪽을 쥔 사람이 이깁니다. 예를 들면 8 원페어는 5 원페어를 이깁니다. 
계급을 이루는 카드 숫자까지 같으면 (예: 둘 다 Q 원페어), 다른 카드를 높은 순서대로 비교해서 승부를 정합니다.

텍스트파일 poker.txt 에는 두 선수가 벌인 1,000회의 승부가 저장되어 있습니다. (우클릭해서 다운로드 받으세요)
한 줄에는 10장의 카드가 공백으로 분리되어 들어있는데, 앞의 다섯 장은 1번 선수 것이고 뒤의 다섯 장은 2번 선수의 패입니다. 잘못되거나 중복된 데이터는 없으며, 무승부도 없습니다.

카드 숫자는 2, 3, ... , 9, T, J, Q, K, A 로 (숫자 10은 T로 표시),
무늬는 C (Club - ♣), D (Diamond - ♦), H (Heart - ♥), S (Spade - ♠) 로 표시되어 있습니다.
예를 들면 3C 3D 3S 9S 9D 의 경우 3 풀하우스가 됩니다.
이 데이터를 분석하고, 1번 선수가 이긴 횟수를 구하세요.
```
