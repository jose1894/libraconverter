/* Programa para el cálculo de conversión entre libras y kilos */

/* Inicio de la función converter, se usa para hacer
el calculo de las conversiones de libra a kilos y viceversa */
export default function libraconverter( valor, tipoConversion )
{

  const CONSTANTE = 2.20462 /* Constante necesaria para realizar el cálculo */
  let total = 0 /* Valor total de conversión */

  /* Si el tipo de conversión es de Kg a Lb */
  if ( tipoConversion == "k2l")
    total = valor * CONSTANTE  /* Multiplica la cantidad de Kilos por el valor constante */
  /* Si el tipo de converisión es de Lb a Kg*/
  else if (tipoConversion == "l2k")
    total = valor / CONSTANTE /* Divide la cantidad de Libras por el valor constante*/

  return total /* Retorna el valor total */

} /* Fin de la función converter */
