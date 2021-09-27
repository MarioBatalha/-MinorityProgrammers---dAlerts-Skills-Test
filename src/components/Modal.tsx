import React from  'react';
import { GrClose } from 'react-icons/gr';

const Modal = ({ handleCloseModal }: any) => {
    return (
        <>
          <div className='modal__container'>
            <div className='modal__content'>
                <button 
                type='submit'
                className='close'
                onClick={handleCloseModal}>
                  <GrClose color=' #FF0000' size={30} />
                </button>
                  <form>
                  <label>Token address
                     <input type='address'  />
                  </label>
                    <div className='chain__content'>
                      <label>CHAIN (ETH , Polygon,  BSC, ETC.)
                        <select name='chain' className='chain'>
                          <option value=''></option>
                          <option value='ETH'>ETH</option>
                          <option value='Polygon'>Polygon</option>
                          <option value='BSC'>BSC</option>
                          <option value='ETC.'>ETC.</option>
                        </select>
                      </label>
                      <label>EXCHANGE (PANCAKESWAP, UNISWAP, ETC.)
                        <select name='exchange' className='exchange'>
                          <option value=''></option>
                          <option value='PANCAKESWAP'>PANCAKESWAP</option>
                          <option value='UNISWAP'>UNISWAP</option>
                          <option value='ETC.'>ETC.</option>
                        </select>
                      </label>
                    </div>
                    <div className='address__content'>
                      <label>TARGET PRICE                      
                        <input type='text'  />
                      </label>
                      <label>ABOVE OR BELOW
                        <select name='below' className='below'>
                          <option value=''></option>
                          <option value='ETC.'>ETC.</option>
                          <option value='UNISWAP'>UNISWAP</option>
                          <option value='ETC.'>ETC.</option>
                        </select>
                      </label>
                    </div>
                    <div className='notification__content'>
                      <label>NOTIFICATION TYPE
                        <select name='notification' className='notification'>
                          <option value=''></option>
                          <option value='GMAIL'>GMAIL</option>
                          <option value='TWITER'>TWITER</option>
                          <option value='INSTAGRAM'>INSTAGRAM</option>
                          <option value='DISCORD'>DISCORD</option>
                          <option value='LINKEDIN'>LINKEDIN</option>
                      </select>
                      </label>
                      <button type='submit' className='add__alert'>Add Alert</button>
                    </div>
                  </form>
            </div>
          </div>
        </>
    )
};

export default Modal;