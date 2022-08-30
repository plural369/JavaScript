dado = int(input('Digite os graus'))

if(dado == 48): 
    print('Rare')
elif(dado <= 54): 
    print('Medium rare')
elif(dado <= 60): 
    print('Medium')
elif(dado <= 65): 
    print('Medium well')
else:
    print('Well done')