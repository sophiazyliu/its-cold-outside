# it's cold outside

it’s cold outside allows you to explore a room full of Christmas sounds: sleigh bells, a crackling fireplace, a Christmas music box, a cat meowing, and more. To discover the sounds, you hover over the animated objects in the room – some sounds are fleeting while others blend together to create a warm and festive Christmas spirit.

## How we built it

We first designed and sketched a cozy Christmas scene with a toasty fireplace, Christmas tree, comfy armchairs, sleepy cat, twinkling Christmas lights, and a window looking out to a soft snowfall. Then we fleshed out the scene and animated it. Using react-videobg, we set the animation as the backdrop of our explorative website. We positioned cards near each animated element in the room and found audio clips that matched them. We trimmed and edited the sounds to suit our interactive site. With the help of a React hook API called use-sound, we added these sounds to the cards, which played on hover. Last, we made the cards transparent so that the sounds would be played when the user explored those areas of the room.