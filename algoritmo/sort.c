#include <stdio.h>

//função separada da função main(), para ordenar os números:
void ordernar(int quantidade, double numeros[quantidade]){

    //Algoritmo bubble sort, que faz a ordenação:
    for (int i = 0; i < quantidade; i++){
        //Parar o for com J antes da array acabar
        for (int j = 0; j < quantidade - i - 1; j++){
            //caso o número da esquerda for maior que o número da direita, trocar eles de lugar.
            if (numeros[j] > numeros[j + 1]){
                double temp = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = temp;
            }
        }
    }
}

int main(){
    int quantidade;

    //Input de N(quantidade)
    printf("Digite quantos números você deseja ordenar: ");
    scanf("%d", &quantidade);
    double numeros[quantidade];

    //Solicitando o input de N números e colocando eles dentro da array numeros[]
    for (int i = 0; i < quantidade; i++){
        printf("Digite o %d⁰ número: ", i + 1);
        scanf("%lf", &numeros[i]);
    }

    ordernar(quantidade, numeros);

    //A saída do programa:
    printf("\nOs números ordenados são: \n(");
    for (int i = 0; i < quantidade; i++){
        if(i == quantidade - 1) {
            printf("%lf)\n", numeros[i]);
            break;
        }
        printf("%lf, ", numeros[i]);
    }
}
