
import * as readlineSync from 'readline-sync';

//  Exibe sempre o uso de memória.
readlineSync .setDefaultOptions ( {​
    prompt : { //  Objeto simples que tem o método toString.  
      toString : função ( )  { 
        var rss  = processo . memoryUsage ( ) . rss ; 
        retornar ' [ ' + ( rss  > 1024 ? Matemática . round ( rss  / 1024 ) + ' k ' :  rss ) + ' b]$  ' ;            
      }
    }
  } ) ;
  