import React from 'react';
import './references-page.styles.scss';
import ReferenceList from '../../components/reference-list/reference-list.component';
import { Jumbotron } from 'react-bootstrap';

const ReferencesPage = () => {
    return (
        <div>
            <div>
                <Jumbotron className='jumbotron'>
                    <h1 className='heading'>Here are the works we referenced in developing our project</h1>
                </Jumbotron>
            </div>
            <div>
                <ReferenceList />
            </div>
        </div>
    );
}

export default ReferencesPage;