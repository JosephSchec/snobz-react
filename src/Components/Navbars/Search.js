
import React, { useState } from "react";
import { Form, FormControl, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';




export default function Search() {
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    return (
        <Form className=" me-2 m-sm-0 d-none d-sm-flex">
            <FormControl
                type="search"
                placeholder="Search Region, City or Shop"
                className="me-sm-0 me-md-3"
                aria-label="Search"
                onChange={e => setValue(e.currentTarget.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        navigate(`/${value}`, { replace: true })
                    }
                }}
            />
            <Link to={`/${value}`}>
                <Button variant="primary" >Search</Button>
            </Link>
        </Form>
    )
}
