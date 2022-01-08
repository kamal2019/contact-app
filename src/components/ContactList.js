import React from 'react'

const ContactList = (props)=> {
    const renderContactList = props.contacts.map((contact) =>{
        return (
            <div className='item'>
                <div className='content'>
                    <div className='header'>{contact.name}</div>
                    <div>{contact.email}</div>
                    </div>
                    <i className='trash alternate outline icon' style={{ color:"red" , marginRight: "20px" }}></i>
                </div>
        );
    });
    return (
        <div className='ui celled list'>
            {renderContactList}
        </div>
    )
}

export default ContactList
