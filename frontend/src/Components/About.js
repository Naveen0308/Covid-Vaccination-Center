import React from 'react';
import logo from '../images/about.jpg';
import { Card } from 'flowbite-react';

const About = () => {
  return (
<div className="container mx-auto px-4 py-8 ">
  <div>
  <h2 className="text-3xl font-bold mb-6 text-center">About COVID-19</h2>
  </div>
  <div className="flex md:flex-row items-center justify-center">
    
    <div className="md:w-3/5 mx-auto ml-5 ">
    <h2 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Corona Virus:</h2>
    <br></br>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et ligula
        sagittis, non auctor elit consectetur. Nulla facilisi. Donec commodo ligula nec
        scelerisque commodo. Vivamus tristique venenatis ante, sed bibendum ipsum lobortis vel.
        Curabitur id sapien vel dolor aliquet cursus. Sed nec consectetur arcu. Suspendisse
        potenti.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et ligula
        sagittis, non auctor elit consectetur. Nulla facilisi. Donec commodo ligula nec
        scelerisque commodo. Vivamus tristique venenatis ante, sed bibendum ipsum lobortis vel.
        Curabitur id sapien vel dolor aliquet cursus. Sed nec consectetur arcu. Suspendisse
        potenti.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et ligula
        sagittis, non auctor elit consectetur. Nulla facilisi. Donec commodo ligula nec
        scelerisque commodo. Vivamus tristique venenatis ante, sed bibendum ipsum lobortis vel.
        Curabitur id sapien vel dolor aliquet cursus. Sed nec consectetur arcu. Suspendisse
        potenti.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et ligula
        sagittis, non auctor elit consectetur. Nulla facilisi. Donec commodo ligula nec
        scelerisque commodo. Vivamus tristique venenatis ante, sed bibendum ipsum lobortis vel.
        Curabitur id sapien vel dolor aliquet cursus. Sed nec consectetur arcu. Suspendisse
        potenti.
      </p>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo et ligula
        sagittis, non auctor elit consectetur. Nulla facilisi. Donec commodo ligula nec
        scelerisque commodo. Vivamus tristique venenatis ante, sed bibendum ipsum lobortis vel.
        Curabitur id sapien vel dolor aliquet cursus. Sed nec consectetur arcu. Suspendisse
        potenti.
      </p>
    </div>
      <Card className="max-w-sm mr-10">
        <img width={500} height={500} src={logo} alt="Center" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          COVID-19
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Aduiiufcsuihcihiuisgzc<br />
          Location:pjsjcpojsojj <br />
          Available Slot;lvd'jv 
        </p>
      </Card>
  </div>
</div>

  );
};

export default About;
