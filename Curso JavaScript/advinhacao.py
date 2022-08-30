from ast import While
from random import random
import string


print("------ OLÁ BEM VINDO A O JOGO DA ADVINHAÇÃO, VOCÊ TEM 5 TENTATIVAS PARA ACERTAR O NUMERO CORRETO, VAMOS COMEÇAR -------")
print("------ Você tem que acertar o numero entre 0 a 100 ------")
import random
rand = random.randrange(0,100)
tentativa = 5

while(tentativa != -1):
    advinhado = int(input("Digite o numero: "))
    if(advinhado == ''):
        print("Digite um numero válido")
    elif(advinhado == rand):
        print("Você acertou o numero era: ", rand)
        tentativa = 0
    elif(advinhado < rand):
        print("você errou o numero é menor do que o correto")
        tentativa -= 1
        print('Restam', tentativa, 'tentativas')
    elif(advinhado > rand):
        print("Você errou o numero digita é maior que o correto")
        tentativa -= 1
        print('Restam', tentativa, 'tentativas')
    if(tentativa == 0):
        print('Você perdeu o numero correto era: ', rand)
        tentativa = -1
