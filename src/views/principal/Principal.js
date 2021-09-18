import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Content } from '../../components/pokeCard/Content'
import { Colors } from '../../components/lateral/Colors'
import { Filters } from '../../components/lateral/Filters'

import "./Principal.css"


export const Principal = () => {

    return (
        <Container>
            <Row>
                <Col md={3} className="mt-3">
                    <div className="card-filters">
                                          
                        <Filters typeForm="checkbox" url="type" title="Tipos" />                        
                        <Colors />
                        <Filters typeForm="radio" url="gender" title="Genero" />
                    </div>                    
                </Col>
                <Col md={9}>
                        <Content />
                </Col>
            </Row>
        </Container>                
    )
}
