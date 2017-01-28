# ncryptjs
Obfuscate any links and decrypt on click.

## How it works
Creates a unique salt key, inserting it inbetween each character.
For the innerHTML, salt keys are insereted inbetween a span set
to hidden to protect the raw connect from the bots.

## Getting Started
```
// To Encrpt
obfs_encode( target );

// To Decrypt
$(target).click( function (event) {
    obfs_decode(event, target);
});
```

## Requirements
- Any Version of jQuery
 - Working on removing the jQuery dependency as it's a big library
