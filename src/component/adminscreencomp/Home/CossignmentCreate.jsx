import React, { useState } from 'react';
import styles from '../../common/Home.module.css'
import { useParams } from 'react-router-dom';


export const AdminCossignmentCreateComponent = ({ updateHandler }) => {
    let [isData, setIsData] = useState({

    })

    let { id } = useParams()

    let handleChangeHandler = (e, nameField) => {
        let val = e.target.value
        if (nameField === '') {
            const dateTimeValue = e.target.value;

            // Convert to a Date object
            const selectedDate = new Date(dateTimeValue);

            // Calculate _seconds and _nanoseconds
            const _seconds = Math.floor(selectedDate.getTime() / 1000);
            const _nanoseconds = 0;
            setIsData(prev => {
                prev[`${nameField}`] = {
                    _seconds: _seconds,
                    _nanoseconds: _nanoseconds
                };
    
                let newData = { ...prev }
                return newData
            })
        } else {
            setIsData(prev => {
                prev[`${nameField}`] = val
                let newData = { ...prev }
                return newData
            })
        }


    }


    let submitHandler = (e) => {
        e.preventDefault()
        //patch case on 

        updateHandler(isData)
    }





    return (<>
        <div className={styles.homeScreen}>

            <div className={styles.timeline} >
                <form className={styles.editForm} onSubmit={submitHandler}>

                    <h3 className={styles.sectionHead}>Flight Details</h3>


                    <div className={styles.inputCards}>
                        <label>
                            Air Line
                        </label>

                        <input value={isData.airline} onChange={(e) => handleChangeHandler(e, 'airline')} type='text'  required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Airport Fee
                        </label>

                        <input value={isData.airportFee} onChange={(e) => handleChangeHandler(e, 'airportFee')} type='text' required/>
                    </div>
                    <div className={styles.inputCards}>
                        <label>
                            Boarding Till
                        </label>
                        <input value={isData.boardingTill} onChange={(e) => handleChangeHandler(e, 'boardingTill')} type='time' required/>
                    </div>


                    <div className={styles.inputCards}>
                        <label>
                            Carrier
                        </label>
                        <input value={isData.carrier} onChange={(e) => handleChangeHandler(e, 'carrier')} type='text' placeholder='UA' required/>
                    </div>



                    <div className={styles.inputCards}>
                        <label>
                            checkInEnabled
                        </label>
                        <select value={isData.checkInEnabled} onChange={(e) => handleChangeHandler(e, ' checkInEnabled')}>
                            <option selected>
                                true

                            </option>
                            <option>
                                false

                            </option>

                        </select>
                    </div>







                    <div className={styles.inputCards}>
                        <label>
                            Flight Class
                        </label>
                        <input value={isData.class} onChange={(e) => handleChangeHandler(e, 'class')} type='text' required/>
                    </div>


                    <div className={styles.inputCards}>
                        <label>
                            Cost
                        </label>
                        <input value={isData.cost} onChange={(e) => handleChangeHandler(e, 'cost')} type='text' required/>
                    </div>


                    <div className={styles.inputCards}>
                        <label>
                            Door
                        </label>
                        <input value={isData.door} onChange={(e) => handleChangeHandler(e, 'door')} type='text' />
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Firstname
                        </label>
                        <input value={isData.firstname} onChange={(e) => handleChangeHandler(e, 'firstname')} type='text' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            From
                        </label>
                        <input value={isData.from} onChange={(e) => handleChangeHandler(e, 'from')} type='text' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Gate
                        </label>
                        <input value={isData.gate} onChange={(e) => handleChangeHandler(e, 'gate')} type='text' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Hand
                        </label>
                        <input value={isData.hand} onChange={(e) => handleChangeHandler(e, 'hand')} type='text' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Is Freemium
                        </label>
                        <select value={isData.is_freemium} onChange={(e) => handleChangeHandler(e, 'is_freemium')}>
                            <option value="true" selected>true</option>
                            <option value="false">false</option>
                        </select>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Other Name
                        </label>
                        <input value={isData.otherName} onChange={(e) => handleChangeHandler(e, 'otherName')} type='text' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Scene
                        </label>
                        <input value={isData.scene} onChange={(e) => handleChangeHandler(e, 'scene')} type='text' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Seat No
                        </label>
                        <input value={isData.seatNo} onChange={(e) => handleChangeHandler(e, 'seatNo')} type='text' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Service Fee
                        </label>
                        <input value={isData.serviceFee} onChange={(e) => handleChangeHandler(e, 'serviceFee')} type='text' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Tax
                        </label>
                        <input value={isData.tax} onChange={(e) => handleChangeHandler(e, 'tax')} type='text' required/>
                    </div>

                 

                    <div className={styles.inputCards}>
                        <label>
                            Time
                        </label>
                        <input value={isData.time} onChange={(e) => handleChangeHandler(e, 'time')} type='time' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            To
                        </label>
                        <input value={isData.to} onChange={(e) => handleChangeHandler(e, 'to')} type='text' required/>
                    </div>

                    <div className={styles.inputCards}>
                        <label>
                            Total Cost
                        </label>
                        <input value={isData.totalCost} onChange={(e) => handleChangeHandler(e, 'totalCost')} type='text' required/>
                    </div>


                    <div className={styles.inputCards}>
                        <label>
                            Cost Currency
                        </label>
                        <select value={isData.costCurrency} onChange={(e) => handleChangeHandler(e, 'costCurrency')}>
                            <option value="USD" selected>$ - US Dollar</option>
                            <option value="EUR">€ - Euro</option>
                            <option value="GBP">£ - British Pound</option>
                            <option value="JPY">¥ - Japanese Yen</option>
                            <option value="AUD">$ - Australian Dollar</option>
                            <option value="CAD">$ - Canadian Dollar</option>
                            <option value="CHF">CHF - Swiss Franc</option>
                            <option value="CNY">¥ - Chinese Yuan</option>
                            <option value="INR">₹ - Indian Rupee</option>
                            <option value="NGN">₦ - Nigerian Naira</option>
                            <option value="ZAR">R - South African Rand</option>
                            <option value="BRL">R$ - Brazilian Real</option>
                            <option value="MXN">$ - Mexican Peso</option>
                            <option value="SGD">$ - Singapore Dollar</option>
                            <option value="HKD">$ - Hong Kong Dollar</option>
                            <option value="NZD">$ - New Zealand Dollar</option>
                            <option value="SEK">kr - Swedish Krona</option>
                            <option value="NOK">kr - Norwegian Krone</option>
                            <option value="DKK">kr - Danish Krone</option>
                            <option value="RUB">₽ - Russian Ruble</option>
                            <option value="KRW">₩ - South Korean Won</option>
                            <option value="THB">฿ - Thai Baht</option>
                            <option value="MYR">RM - Malaysian Ringgit</option>
                            <option value="IDR">Rp - Indonesian Rupiah</option>
                            <option value="TRY">₺ - Turkish Lira</option>
                            <option value="SAR">﷼ - Saudi Riyal</option>
                            <option value="AED">د.إ - UAE Dirham</option>
                            <option value="EGP">£ - Egyptian Pound</option>
                            <option value="ARS">$ - Argentine Peso</option>
                            <option value="COP">$ - Colombian Peso</option>
                            <option value="PEN">S/. - Peruvian Sol</option>
                            <option value="PHP">₱ - Philippine Peso</option>
                            <option value="VND">₫ - Vietnamese Dong</option>
                        </select>
                    </div>










                    <div className={styles.inputCards}>
                        <label>
                            Price Disabled
                        </label>
                        <select value={isData.priceDisabled} onChange={(e) => handleChangeHandler(e, 'priceDisabled')}>
                            <option value="true" selected>true</option>
                            <option value="false">false</option>
                        </select>
                    </div>


                    <div className={styles.inputCards}>
                        <label>
                            Flight
                        </label>
                        <select value={isData.flight} onChange={(e) => handleChangeHandler(e, 'flight')}>
                            <option value="UA 269" selected>UA 269 - United Airlines</option>
                            <option value="AA 123">AA 123 - American Airlines</option>
                            <option value="DL 456">DL 456 - Delta Airlines</option>
                            <option value="BA 789">BA 789 - British Airways</option>
                            <option value="LH 890">LH 890 - Lufthansa</option>
                            <option value="AF 101">AF 101 - Air France</option>
                            <option value="EK 202">EK 202 - Emirates</option>
                            <option value="SQ 303">SQ 303 - Singapore Airlines</option>
                            <option value="QF 404">QF 404 - Qantas</option>
                            <option value="KL 505">KL 505 - KLM</option>

                        </select>
                    </div>



                    <div className={styles.inputCards}>
                        <label>
                            Date and Time
                        </label>
                        <input
                            type="date"
                            value={isData.dateAndTime && new Date(isData.dateAndTime._seconds * 1000)}
                            onChange={(e) => {
                                handleChangeHandler(e, 'dateAndTime')
                            }}
                            />
                    </div>
                    
                    <div className={styles.inputCards}>
                        <label>
                            Date
                        </label>
                        <input
                            type="date"
                            value={isData.date}
                            onChange={(e) => {
                                handleChangeHandler(e, 'date')
                            }}
                            required/>
                    </div>

                    <div className={styles.buttonContainer} >
                        <button >save</button>
                    </div>
                </form>
            </div >






        </div ></>)




}