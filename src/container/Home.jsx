import React, { useState, useEffect } from 'react'
import Button from '../components/button/Button';
import Input from '../components/input/Input';
import Select from '../components/select/Select';
import { PLANETAS, GENERO, PAISES } from '../utils/CONST';
import Header from './components/Header';

export const Home = () => {

    const [dataForm, setDataForm] = useState({
        name: '',
        surname: '',
        email: '',
        gender: '',
        country: '',
        planet: '',
        phone: '',
        radioplanet: 'no'
    })

    const handlerOnChange = (event) => {
        const values = event.target.value;

        setDataForm({
            ...dataForm,
            [event.target.name]: values,
        })
    }
    useEffect(() => {
        // const { radioplanet } = dataForm;
        if (radioplanet === "no") return dataForm.planet = " ";
    });

    const handleClick = (e) => {
        e.preventDefault();
        console.log('data', dataForm)
    }

    const { name, surname, email, phone, gender, planet, country, radioplanet } = dataForm

    const flagY = radioplanet === "si"
    const flagN = radioplanet === "no"

    return (

        <div>
            <Header />
            <div className=" d-flex flex-row justify-content-center mb-5">
                <form >
                    <div className=" d-flex flex-row justify-content-center border-bottom pb-3">
                        <div>
                            <Input
                                name="name"
                                type="text"
                                label="Nombre"
                                value={name}
                                placeholder="Nombre"
                                onChange={handlerOnChange}
                            />
                            <Input
                                name="email"
                                type="email"
                                value={email}
                                label="Correo Electrónico"
                                placeholder="Correo electrónico"
                                onChange={handlerOnChange}

                            />
                            <Select
                                name="gender"
                                placeholder="Selecciona tu género"
                                text="Género"
                                value={gender}
                                data={GENERO}
                                onChange={handlerOnChange}
                            />
                        </div>
                        <div className="ml-5">
                            <Input
                                name="surname"
                                type="text"
                                label="Apellido"
                                value={surname}
                                placeholder="Apellido"
                                onChange={handlerOnChange}
                            />
                            <Input
                                name="phone"
                                type="tel"
                                label="Teléfono"
                                placeholder="123456789"
                                value={phone}
                                onChange={handlerOnChange}
                            />
                            <Select
                                name="country"
                                placeholder="Selecciona tu País"
                                text="País"
                                value={country}
                                data={PAISES}
                                onChange={handlerOnChange}
                            />
                        </div>

                    </div>
                    <div className="pt-4 ">
                        <h5>¿ Has viajado a otro planeta ?</h5>
                        <div className="d-flex flex-row justify-content-center pt-2">
                            <div className="form-check form-check-inline">
                                <Input
                                    type="radio"
                                    name="radioplanet"
                                    label="Si"
                                    value="si"
                                    onChange={handlerOnChange}
                                    checked={flagY}
                                />
                            </div>
                            <div className="form-check form-check-inline">
                                <Input
                                    type="radio"
                                    name="radioplanet"
                                    label="No"
                                    value="no"
                                    onChange={handlerOnChange}
                                    checked={flagN}
                                />
                            </div></div>

                        {radioplanet === "si"
                            && <div>
                                <Select
                                    name="planet"
                                    value={planet}
                                    data={PLANETAS}
                                    onChange={handlerOnChange}
                                />
                            </div>}

                    </div>

                    <Button
                        text="Enviar"
                        onClick={handleClick}
                    />
                </form>
            </div>



        </div>
    )
}

export default Home;