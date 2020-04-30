import React from 'react';
import {Footer, FooterLinkList, FooterSection} from 'react-mdl'

const EndFooter = () => {
    return ( 
        <div>
    <Footer size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
        </div>
     );
}
 
export default EndFooter;



