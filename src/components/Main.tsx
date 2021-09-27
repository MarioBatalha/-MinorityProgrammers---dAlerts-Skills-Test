import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';

import Modal from './Modal';
import data from '../data/data';

const Main = () => {
    const [ isOpenModal, setIsOpenModal ] = useState<boolean>(false);

    const handleOpenModal = () => {
      setIsOpenModal(true);
      console.log('clicked')
    };

     const handleCloseModal = () => {
      setIsOpenModal(false);
    };
    return (
        <>
          <main>
            <ul>
              <li>Symbol</li>
              <li>
                Exchange
                <span className='subtitle'>
                  <small>chain</small>
                </span>
              </li>
              <li>Alert price</li>
              <li>Current</li>
              <li>Notification type</li>
              <li>
                <button
                 className='add__item'
                 onClick={handleOpenModal}>
                  <FiPlus size={20} />
                  New Alert
                </button>
              </li>
            </ul> 
            <hr className='horizontal__line' />
            <div className='filters__search'>
              <button className='filters__search__icon' type='submit'>
                <FiSearch color='#256EFF' size={25} />
              </button>
              <input 
              type='text'
              className='filters__search__input'
              placeholder='SEARCH FOR TOKEN SYMBOL, EXCHANGE NAME, OR NOTIFICATION TYPE'
              data-testid='value-field'
              />        
            </div>
            {
             isOpenModal && <Modal handleCloseModal={handleCloseModal} />
            }
            <table>  
              {data.map((item) => {
                 const { id, title, desc, subtitle, img, alertPrice, currentPrice, notificationType } = item;
                 return (
                    <tr key={id}>
                    <td>
                    <img 
                      src={img}
                      alt={title}
                      className='img__profile' />
                      {title}
                    </td>
                    <td>{desc}
                    <span className='subtitle'> 
                      <small>{subtitle}</small>
                    </span>
                    </td>      
                    <td>{alertPrice}</td>
                    <td>{currentPrice}</td>
                    <td>{notificationType}</td>
                    <td>
                      <button 
                      type='button'
                      className='cancel__button'
                      >CANCEL</button>
                    </td>
                  </tr>
                 )        
              })}
            </table>
          </main>
        </>
    )
}

export default Main;
