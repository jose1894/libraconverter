const expect = require( "chai" ).expect
const libraconverter = require( '..' ).default

describe( '#libraconverter', function(){

  it('Puede convertir 1 kilos (números enteros) a 2.20462 libras',function(){
    const resultado = libraconverter( 1, "k2l")
    expect(resultado).to.equal(2.20462)
  })
  it('Puede convertir 2 libras (números enteros) a 0.9071858188712795 kilos',function(){
    const resultado = libraconverter( 2, "l2k")
    expect(resultado).to.equal(0.9071858188712795)
  })
  it('Puede convertir 2.5 kilos (números decimales) a 5.51155 libras',function(){
    const resultado = libraconverter( 2.5, "k2l")
    expect(resultado).to.equal( 5.51155)
  })
  it('Puede convertir 2.5 libras (números decimales) a 1.1339822735890994 kilos',function(){
    const resultado = libraconverter( 2.5, "l2k")
    expect(resultado).to.equal( 1.1339822735890994)
  })

})
