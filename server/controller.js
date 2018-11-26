var id=14;
let quotesArray= [
    {
        text:
          "The most important relationship we can all have is the one you have with yourself, the most important journey you can take is one of self-discovery. To know yourself, you must spend time with yourself, you must not be afraid to be alone. Knowing yourself is the beginning of all wisdom.",
        id: 0
      },
      {
        text:
          "Anybody can become angry - but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way - that is not within everybody's power and is not easy.",
        id: 1
      },
    
      {
        text:
          "Be a free thinker and don't accept everything you hear as truth. Be critical and evaluate what you believe in.",
        id: 2
      },
    
      {
        text:
          "You will never do anything in the world without courage. It is the greatest quality of the mind next to honor.",
        id: 3
      },
    
      {
        text:
          "Democracy is when the indigent, and not the men of property, are the rulers.",
        id: 4
      },
    
      {
        text:
          "The most perfect political community is one in which the middle class is in control, and outnumbers both of the other classes.",
        id: 5
      },
    
      {
        text:
          "You can discover more about a person in an hour of play than in a year of conversation.",
        id: 6
      },
    
      {
        text:
          "Wise speak because they have something to say; Fools because they have to say something.",
        id: 7
      },
    
      {
        text:
          "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        id: 8
      },
    
      {
        text:
          "No man should bring children into the world who is unwilling to persevere to the end in their nature and education.",
        id: 9
      },
    
      {
        text:
          "The direction in which education starts a man will determine his future in life.",
        id: 10
      },
    
      {
        text:
          "Good people do not need laws to tell them to act responsibly, while bad people will find a way around the law.",
        id: 11
      },
    
      {
        text: "Only the dead have seen the end of the war.",
        id: 12
      },
    
      {
        text: "Ignorance, the root and steam of all evil.",
        id: 13
      }
];

module.exports= {

    viewquotes: (req, res) => {
        res.status(200).send(quotesArray);
    },

    addquotes: (req, res) => {
       let quote= req.body.quote;
       quotesArray.push({
           text: quote,
           id: id
        })
       id++
       res.status(200).send(quotesArray); 
    },

    editquotes: (req, res) =>{
      for(let i=0; i<quotesArray.length; i++){
        if(req.params.id==quotesArray[i].id){
          quotesArray[i].text= req.body.text
        }
      
      }
      res.status(200).send(quotesArray)
    },

    deletequotes: (req, res) =>{
      for (let i=0; i<quotesArray.length; i++){
        if(Number(req.params.id)=== quotesArray[i].id){
          quotesArray.splice(i, 1)
        }
      }
console.log(quotesArray);
    res.status(200).send(quotesArray)
    }

}