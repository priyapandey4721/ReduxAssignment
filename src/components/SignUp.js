import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux';
import { submitData } from '../services/actions/actions';

const schema = yup.object().shape({
    name: yup.string()
        .required()
        .matches(/[A-Z][a-z]*.{1,}/, "Name starts with capital letter and length must be >= 2, it does not include any numbers and symbols."),
    age: yup.number()
        .positive()
        .integer()
        .required()
        .min(18)
        .max(99),
    email: yup.string()
        .email()
        .required(),
    pass: yup.string()
        .min(8)
        .max(16)
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/, "Password only have at least a symbol, upper and lower case letters and a numbers")
        .required(),
    cpass: yup.string()
        .oneOf([yup.ref('pass')], 'Passwords must match')
        .required()
}).required()


function SignUp() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(submitData(data));
        reset();
    }

    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <center><h2>Sign UP</h2></center>
                    <hr />
                    <div className="card m-auto" style={{ width: '50%' }}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text"
                                        {...register("name")}
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="name" aria-describedby="nameerror"
                                    />
                                    <small id="nameerror" className="invalid-feedback">
                                        {errors.name?.message}
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Age</label>
                                    <input type="number"
                                        {...register("age")}
                                        className={`form-control ${errors.age ? 'is-invalid' : ''}`} id="age" aria-describedby="ageerror"
                                    />
                                    <small id="ageerror" className="invalid-feedback">
                                        {errors.age?.message}
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email"
                                        {...register("email")}
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" aria-describedby="emailHelp"
                                    />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    <small id="emailHelp" className="invalid-feedback">
                                        {errors.email?.message}
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass">Password</label>
                                    <input type="password"
                                        {...register("pass")}
                                        className={`form-control ${errors.pass ? 'is-invalid' : ''}`} id="pass" aria-describedby="passerror"
                                    />
                                    <small id="passerror" className="invalid-feedback">
                                        {errors.pass?.message}
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpass">Confirm Password</label>
                                    <input type="password"
                                        {...register("cpass")}
                                        className={`form-control ${errors.cpass ? 'is-invalid' : ''}`} id="cpass" aria-describedby="cpasserror"
                                    />
                                    <small id="cpasserror" className="invalid-feedback">
                                        {errors.cpass?.message}
                                    </small>
                                </div>
                                <br />
                                <div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
