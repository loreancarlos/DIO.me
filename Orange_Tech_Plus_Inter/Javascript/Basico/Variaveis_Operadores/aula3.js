const note1 = 6;
const note2 = 6;
const note3 = 2;

const averageNote = ((note1 + note2 + note3) / 3).toFixed(1);

if (averageNote < 5 && averageNote >= 0) {
   console.log(`Você foi reprovado DIRETO, com a nota MEDÍOCRE de ${averageNote} pontos. Sua nota vale um F.`);
} else if (averageNote >= 5 && averageNote < 7) {
   console.log(`Quase em... Pegou recuperação por fazer só ${averageNote} pontos. Vê se estuda.`);
} else if (averageNote >= 7 && averageNote <= 10) {
   console.log(`Ai sim! Passou com excelência. Se orgulhe dos seus ${averageNote} pontos.`);
} else {
   console.log("Digitou nota errada ai.");
}