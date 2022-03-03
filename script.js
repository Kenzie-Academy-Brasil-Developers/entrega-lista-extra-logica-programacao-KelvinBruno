  function calculateSalary(salarioFixo, valorDasVendas) {
    let b = valorDasVendas;
    let salario = 0;
    if (b <= 1200) {
      salario = (b / 100) * 3 + salarioFixo;
      return salario;
    } else {
      salario = ((b - 1200) / 100) * 5 + (1200 / 100) * 3 + salarioFixo;
      return salario;
    }
  }
  function cashMachine(valorDoSaque, salarioFixo, valorDasVendas) {
    let a = valorDoSaque;
    let salario = calculateSalary(salarioFixo, valorDasVendas);
    salario = salario - valorDoSaque;
    let contadorde200 = 0;
    let contadorde100 = 0;
    let contadorde50 = 0;
    let contadorde20 = 0;
    let contadorde10 = 0;
    let contadorde5 = 0;
    let contadorde2 = 0;

    while (a > 199) {
      a = a - 200;
      contadorde200++;
    }
    while (a > 99) {
      a = a - 100;
      contadorde100++;
    }
    while (a > 49) {
      a = a - 50;
      contadorde50++;
    }
    while (a > 19) {
      a = a - 20;
      contadorde20++;
    }
    while (a > 9) {
      a = a - 10;
      contadorde10++;
    }
    if (a < 10 && a % 2 === 0) {
      while (a > 1) {
        a = a - 2;
        contadorde2++;
      }
    }
    if (a < 10 && a % 2 !== 0) {
      while (a > 4) {
        a = a - 5;
        contadorde5++;
      }
      while (a > 1) {
        a = a - 2;
        contadorde2++;
      }
    }

    return (
      "São " +
      contadorde200 +
      " notas de R$200, " +
      "são " +
      contadorde100 +
      " notas de R$100, " +
      "são " +
      contadorde50 +
      " notas de R$50, " +
      "são " +
      contadorde20 +
      " notas de R$20, " +
      "são " +
      contadorde10 +
      " notas de R$10, " +
      "são " +
      contadorde5 +
      " notas de R$5, " +
      "são " +
      contadorde2 +
      " notas de R$2, " +
      "o salário restante é R$ " +
      salario +
      " e o valor do saque foi de R$ " +
      valorDoSaque
    );
  }

  function calculateStock(quantidadeAtual, quantidadeMaxima, quantidadeMinima) {
    let valorMedio = (quantidadeMaxima - quantidadeMinima) / 2;
    if (valorMedio <= quantidadeAtual) {
      return "Não efetuar comprar";
    } else {
      return "Efetuar compra";
    }
  }
  function calculateAge(anoNasc, anoAtual) {
    let idade = anoAtual - anoNasc;
    let idadeMes = idade * 12;
    let idadeDia = idade * 365;
    let idadeSem = idade * 52;
    return (
      "Você tem " +
      idade +
      "ano(s), até hoje você já viveu " +
      idadeMes +
      " meses, mas se fossem em semanas, seriam " +
      idadeSem +
      " semanas e se fossem em dias, seriam " +
      idadeDia +
      "dias"
    );
  }

  function getDiagonal(a) {
    let string = " ";
    let n = a.length;
    for (i = 0; i < n; i++) {
      string += " " + a[i][i] + ",";
    }
    return string;
  }
   
  
  
