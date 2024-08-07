import videoJumper from './assets/video/jumper.mp4'

import Img01 from './assets/img/img-01.png'
import Img02 from './assets/img/img-02.png'
import Ebooks from './assets/img/ebooks.png'

import gabycoimbra14 from './assets/img/gabycoimbra14.jpg'
import gabycoimbra14Video from './assets/video/gabycoimbra14.mp4'

import agoticasuave from './assets/img/agoticasuave.jpg'
import agoticasuaveVideo from './assets/video/agoticasuave.mp4'

import talitaBellone from './assets/img/talitabellone.jpg'
import talitaBelloneVideo from './assets/video/talitabellone.mp4'

function App() {

  return (
   <main>
    
<section className="w-full px-8 text-gray-700">
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-col md:flex-row">
            <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span className="mx-auto text-xl font-black leading-none text-white select-none">FREE<span className="text-white bg-red-800 pr-1">JUMPERS</span></span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
                <a href="#_" className="mr-5 font-medium leading-6 text-gray-400 hover:text-gray-900">Benefícios</a>
                <a href="#_" className="mr-5 font-medium leading-6 text-gray-400 hover:text-gray-900">Depoimentos</a>
                <a href="#_" className="mr-5 font-medium leading-6 text-gray-400 hover:text-gray-900">E-books</a>
                <a href="#_" className="mr-5 font-medium leading-6 text-gray-400 hover:text-gray-900">Sobre</a>
            </nav>
        </div>
    </div>
</section>

<section className="px-2 md:px-0">
  <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="text-red-800 block xl:inline">Pule corda além do comum</span><br />
            <span className="block text-white xl:inline">Venha ser um </span><span className='leading-relaxed'>FREE<span className="text-white bg-red-800 pr-2">JUMPER</span></span>
          </h1>
          <p className="mx-auto text-base text-white sm:max-w-md lg:text-xl md:max-w-3xl">
          Não se trata somente de pular corda, mas de conhecer a si mesmo, você é capaz de fazer coisas incríveis.
          </p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            <a target="_blank" href="https://chk.eduzz.com/2182375?a=90202708" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-600 rounded-md sm:mb-0 hover:bg-red-700 sm:w-auto">
            E-book O guia definitivo
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a target="_blank" href="https://chk.eduzz.com/2094994?a=90202708" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
            E-book Mic Release
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 -mt-20">
        <div className="relative w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">

        <video autoPlay={true} loop={true} muted={false} controls>
            <source src={videoJumper} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </div>
  </div>
</section>

 <section className="w-full pt-7 pb-7 md:pt-20 md:pb-24">
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
        <img src={Img02} className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" alt='mulher-desportivo-da-aptidao-nova-que-levanta-guardando-a-corda-de-salto-no-branco' />
        </div>

        <div className="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Benefícios
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-600 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Não adianta somente aprender a pular é preciso saber treinar da forma correta para evitar lesões, por isso o e-book terá:
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-200 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white  border-white border rounded-full">
                        <span className="text-sm font-bold">✓</span></span> Periodização de treino de 10 semanas
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-200 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white  border-white border rounded-full">
                        <span className="text-sm font-bold">✓</span></span> Controle de tempo do treino (em blocos)
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-200 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white  border-white border rounded-full">
                        <span className="text-sm font-bold">✓</span></span>  Ferramentas de controle
                </li>
            </ul>
        </div>
    </div>
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

        <div className="box-border w-full text-white border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
            Pule Corda Além do Comum
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-600 border-0 border-gray-300 sm:pr-10 lg:text-lg">
            Um convite para você sair da sua zona de conforto, deixar a monotonia de lado e descobrir um novo mundo de possibilidades para a prática de exercícios
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-200 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white border-white border rounded-full">
                        <span className="text-sm font-bold">✓</span></span>Melhora o humor e diminuir a ansiedade
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-200 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white border-white border rounded-full">
                        <span className="text-sm font-bold">✓</span></span>Melhora o condicionamento físico
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-200 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white  border-white border rounded-full">
                        <span className="text-sm font-bold">✓</span></span>Fortaleça o sistema cardiovascular, aumentando a resistência e a capacidade pulmonar.
                </li>
            </ul>
        </div>

        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
        <img src={Img01} className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " alt='mulher jovem se exercitando com uma corda de pular' />
        </div>
    </div>
</section>

<section className="py-20 bg-red-800">
  <div className="container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight text-white tracking-tight sm:text-4xl font-heading">
          Repleto com todas as ferramentas que você precisa para ter sucesso!
          </h2>
          <p className="mb-4 font-medium tracking-tight text-black xl:mb-6">
          Venha fazer parte do Freejumpers e dar início a sua jornada de transformação.
          </p>
          <ul>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white  border-white border rounded-full">
            <span className="text-sm font-bold">✓</span></span>              <span className="font-medium text-gray-200">Manobras iradas</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white  border-white border rounded-full">
            <span className="text-sm font-bold">✓</span></span>              <span className="font-medium text-gray-200">Combos para potencializar seus treinos</span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white  border-white border rounded-full">
            <span className="text-sm font-bold">✓</span></span>
            <span className="font-medium text-gray-200">Footworks para dar estilo aos seus saltos</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
      <img className="mx-auto sm:max-w-sm lg:max-w-full" src={Ebooks} alt="feature image" /></div>
    </div>
  </div>
</section>

<section className="flex items-center justify-center py-20 bg-black min-w-screen">
    <div className="px-16 bg-black">
        <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-red-900 uppercase lg:justify-center lg:items-center">
            Não acredite apenas na nossa palavra
                </p>

            <h2 className="relative flex items-start justify-start w-full max-w-3xl text-white text-4xl font-bold lg:justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
            </svg>
            Veja o que os outros estão dizendo
            </h2>
                <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                
                <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                    <div className="flex items-center justify-center">
                        <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                            <img src={agoticasuave} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h4 className="font-bold text-gray-800">Amelie Oliveira</h4>
                            <p className="text-gray-600">Atleta de Crossfit</p>
                        </div>
                    </div>
                    <video className="max-w-sm" autoPlay={false} controls>
            <source src={agoticasuaveVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                    <div className="flex items-center justify-center">
                        <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                            <img src={talitaBellone} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h4 className="font-bold text-gray-800">Talita Bellone</h4>
                            <p className="text-gray-600">Mãe da Gigi e da Lolo</p>
                        </div>
                    </div>
                    <video className="max-w-sm" autoPlay={false} controls>
            <source src={talitaBelloneVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>

                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                    <div className="flex items-center justify-center">
                        <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                            <img src={gabycoimbra14} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h4 className="font-bold text-gray-800">Gabriella Alves</h4>
                            <p className="text-gray-600">Mãe Feliz</p>
                        </div>
                    </div>
                    <video className="max-w-sm" autoPlay={false} controls>
            <source src={gabycoimbra14Video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="box-border py-8 leading-7 text-gray-900  border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
    <div className="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
        <div className="flex flex-col items-center leading-7 text-center text-gray-900">
            <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-white border-solid sm:text-4xl md:text-5xl">
                E-books
            </h2>
            <p className="box-border mt-4 text-2xl leading-normal text-gray-200 border-solid">
            Chegou a hora de você aprender a pular corda além do comum!!
            </p>
        </div>
        <div className="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4  border-red-600 rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-2">
            <div className="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
            <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">
                E-book Pular Corda O Guia Definitivo para Iniciantes
                </p>
                <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                   <img src="https://cdn.eduzzcdn.com/myeduzz/upload/6d/1b/6d1b774b49ac493c85910b6439b410b1" alt="img01" className="w-40 h-40" />
                </div>
                <a 
                target="_blank" href="https://chk.eduzz.com/2182375?a=90202708"
                className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-red-600 border-b-4 border-red-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">
                    Comprar
                </a>
            </div>
            
            <div className="box-border px-4 py-8 text-center bg-gray-100 border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                <p className="mt-3 leading-7 text-gray-900 border-0 border-solid">           
                    Ebook Mic Release - Pule Corda Além do Comum
                </p>
                <div className="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                
                <img src="https://cdn.eduzzcdn.com/myeduzz/upload/2b/00/2b002cd92f32491d8e61fefca81b3b58" alt="img01" className="w-40 h-40" />

                </div>
                <a 
                target="_blank" href="https://chk.eduzz.com/2094994?a=90202708"
                className="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-red-600 no-underline bg-transparent border border-b-2 border-red-600 rounded cursor-pointer hover:bg-red-600 hover:border-red-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                    Comprar
                </a>
            </div>
        </div>
    </div>
</section>

<section className="bg-black">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-900">
                    Benefícios
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-900">
                    Depoimentos
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-900">
                    E-books
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-900">
                    Sobre
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-gray-200 hover:text-gray-900">
                    Termos
                </a>
            </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
            </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 FreeJumpers, Inc. All rights reserved.
        </p>
    </div>
</section>

   </main>
  )
}

export default App
