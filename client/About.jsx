import React, {Component} from 'react';

export default class AccountsUI extends Component {
    setVar() {
        Session.set('Meteor.loginButtons.dropdownVisible', true);
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>Mumblecore skateboard gentrify echo park. Bushwick vinyl actually, pickled retro single-origin coffee
                    poutine selvage four dollar toast fashion axe farm-to-table VHS portland echo park. Trust fund
                    normcore kale chips farm-to-table. Four dollar toast ugh aesthetic 90's. Mlkshk williamsburg
                    sustainable scenester. Vegan letterpress tousled 8-bit, brunch readymade normcore +1. Pitchfork
                    biodiesel ramps kale chips austin, asymmetrical paleo.</p>

                <p>Forage ethical asymmetrical polaroid tumblr. Brooklyn neutra chambray bicycle rights williamsburg
                    master cleanse. Dreamcatcher before they sold out selfies typewriter kickstarter, pork belly kinfolk
                    wolf thundercats ugh scenester actually. Narwhal twee chia, organic 8-bit mlkshk iPhone gluten-free
                    wayfarers chicharrones. Seitan tacos quinoa, VHS lomo pop-up mlkshk mustache. You probably haven't
                    heard of them pug gastropub williamsburg authentic. Art party truffaut bicycle rights, meditation
                    tumblr normcore venmo jean shorts craft beer flannel kickstarter vegan.</p>

                <button onClick={this.setVar}>Sign Up</button>
            </div>
        );
    }
}
