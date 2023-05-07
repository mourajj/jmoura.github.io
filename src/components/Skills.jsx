import React from 'react';

import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Golang from '../assets/go.png';
import Docker from '../assets/docker.png';
import Kubernetes from '../assets/kubernetes.png';
import Java from '../assets/java.png';
import ElasticSearch from '../assets/elasticsearch.png';
import Jenkins from '../assets/jenkins.png';
import Rest from '../assets/rest.png';
import Spring from '../assets/spring.png';
import Graphql from '../assets/graphql.png';
import Junit from '../assets/junit.png';
import Shellscript from '../assets/shellscript.png';
import Sql from '../assets/sql.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0f0f0f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#ff4415] '>Skills</p>
              <p className='py-4'>// This is my current technology stack</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={Golang} alt="HTML icon" />
                  <p className='my-4'>GOLANG</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={Docker} alt="HTML icon" />
                  <p className='my-4'>DOCKER</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={Kubernetes} alt="HTML icon" />
                  <p className='my-4'>KUBERNETES</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={ElasticSearch} alt="HTML icon" />
                  <p className='my-4'>ELASTICSEARCH</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={Jenkins} alt="HTML icon" />
                  <p className='my-4'>JENKINS</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-8 gap-4 text-center py-2'>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-12 py-3 mx-auto' src={Spring} alt="HTML icon" />
                  <p className='my-4'>SPRING</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-12 py-1.5 mx-auto' src={Sql} alt="HTML icon" />
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-12 py-1 mx-auto' src={Rest} alt="HTML icon" />
                  <p className='my-4'>REST/SOAP</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-12 py-1 mx-auto' src={Graphql} alt="HTML icon" />
                  <p className='my-4'>GRAPHQL</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-12 py-1.5 mx-auto' src={Junit} alt="HTML icon" />
                  <p className='my-4'>TESTS</p>
              </div>
              <div className='shadow-md shadow-[#3f3f3f] hover:scale-110 duration-500 py-2'>
                  <img className='w-12 py-1.5 mx-auto' src={Shellscript} alt="HTML icon" />
                  <p className='my-4'>ShellScript</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
