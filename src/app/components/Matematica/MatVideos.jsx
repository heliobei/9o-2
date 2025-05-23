import React from 'react'
import ReactPlayer from 'react-player'

function MatVideos() {
    return (
        <div className='max-w-7xl mx-auto m-4'>
          <div className="attention-box mx-8 text-slate-800 text-center text-lg border-2 border-primary rounded-lg p-8">
              <h1 className="text-4xl font-semibold text-slate-700 mb-4">Atividades Extras</h1>
                <p>
                    Acesse as <a href="https://exerciciosextras9o.beieducacaopedagogico.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-purple-800"> atividades extras</a>{' '}que vão além do conteúdo presente nos livros físicos. Aqui você poderá acessar e baixar PDFs com atividades para cada capítulo, dando um passo além no ensino de habilidades matemáticas.
                </p>
                
              </div>

          <div className='mx-auto p-4'>
            <h1 className='font-bold text-3xl py-4 text-center text-slate-700'>Operações com números racionais na representação fracionária</h1>
            <p className='text-slate-700 py-4'>É sempre bom revisar operações com frações. Abaixo um vídeo com exemplos rápidos e diretos das principais operações com frações. Caso seja necessário, uma retomada mais detalhada sobre multiplicação e divisão, o Professor Rafael Procópio do canal Matemática Rio, traz vídeos com um pouco mais de teoria, diversos exemplos além de desafios.</p>
          </div>
          
          <div className="max-w-screen-xl mx-auto p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
            
            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/hoGZwjnlhM0' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Operações com frações</p>
              
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/cAIriwPjqbY' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Adição e subtração de frações</p>
              
            </div>

          </div>

          <div className="max-w-screen-xl mx-auto pb-4 p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
            
            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/8OzOxrBX9Ws' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Multiplicação de frações</p>
              
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                <ReactPlayer url='https://youtu.be/bO8JnmlzWv4' width="100%" />
              </div>
              <p className='text-center text-slate-800 font-bold p-4'>Divisão de frações</p>
              
            </div>
            
          </div>
        </div>
      )
    }

export default MatVideos
