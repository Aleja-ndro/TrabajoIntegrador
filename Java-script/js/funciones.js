function calcular()
{ 
    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    select=document.getElementById("ope");
    select_activa=select.options[select.selectedIndex].value;
    result=0;

    switch(parseInt(select_activa))
    {
        case suma:
            result=parseInt(valor1)+ parseInt(valor2);
            break;

        case resta:
            result=valor1- valor2;
            break;
        case multiplicación:
            result=valor1* valor2;
            break;
        case division:
            result=valor1/ valor2;
            break;
    }
    dicument.getElementById("valor3").value=result






}
