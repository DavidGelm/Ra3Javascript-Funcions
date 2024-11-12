function Vocals(text) {
    let contador = 0;
    const vocals = "aeiouàèéíòóúüAEIOUÀÈÉÍÒÓÚÜ";
   for(let i=0;i<text.length;i++){
       if(vocals.includes(text[i])){
           contador++
       }
   }
   return  "Vocals: " + contador
}

console.log(Vocals("Patata"));
