import React from "react";

class AllItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <header class="entry-header">
          <h1 class="entry-title">Buy A Star for Any Occasion</h1>
        </header>

        <div class="entry-content">
          <h2>Dedicate a Star in Honor of Someone Special</h2>
          <p>
            Buying a star is a unique gift you’ll love to give, and the
            recipient will love to receive. You can dedicate a star in honor of
            someone special for any occasion from Name a Star, The Original Star
            Naming Service – Since 1978®.
          </p>
          <p>
            How do you buy a star for someone? Simply choose your star naming
            package and then customize your star certificate. Name a star after
            a friend, loved one, or anyone special in your life. You can even{" "}
            <a href="http://nameastar.com/library-faqs/constellations/">
              choose the constellation
            </a>{" "}
            where the recipient can find their star.
          </p>
          <p>
            Star buying is perfect for any number of special occasions. Select a
            gift for birthdays, holidays, anniversaries, or any event. Don’t
            forget kids—they’ll love looking for their specially named star in
            the night sky.
          </p>
          <p>
            Lost a friend or loved one? Remember them by buying and{" "}
            <a href="http://nameastar.com/memorial-stars/star-dedications/">
              dedicating a star
            </a>{" "}
            in their honor with a memorial star.
          </p>
          <p>
            We make star buying easy. Choose your star with confidence from the
            Original Star Naming Service and give a special gift that will last
            a lifetime.
          </p>

          <div class="woocommerce columns-3">
            <ul class="products">nothing</ul>
          </div>
        </div>
      </div>
    );
  }
}

export {AllItems};
