# Cosmos

<p align="center">
<img height="100" widht="300" src="https://github.com/andreaGuzes/CDMX010-cipher/blob/master/src/img/logo.png">
</p>

<p  align="center">
• <a  href="#1-introducción">1. Introducción</a> •
<a  href="#2-interfaz">2. Interfaz</a> •
<a  href="#3-stack-tecnológico">3. Stack tecnológico</a>

---

## 1. Introducción

Cosmos es una aplicación web que tiene como objetivo cifrar y decifrar formulaciones del laboratorio o cualquier mensaje secreto. Esta basada en el principio del [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) que es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

<p align="center">
<img height="200" widht="350" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png">
</p>

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Interfaz

Al inicio de la aplicación muestran dos perfiles Químico Formulador y Químico Preparador.

<p align="center">
<img height="200" widht="400" src="https://github.com/andreaGuzes/CDMX010-cipher/blob/master/src/img/beginning.PNG">
</p>
<p align="center">
<img height="200" widht="400" src="https://github.com/andreaGuzes/CDMX010-cipher/blob/master/src/img/profiles.PNG">
</p>

En el perfil del Químico Formulador es donde se ingresará el mensaje que se desea codificar.

<p align="center">
<img height="200" widht="400" src="https://github.com/andreaGuzes/CDMX010-cipher/blob/master/src/img/text.PNG">
  <img height="200" widht="400" src="https://github.com/andreaGuzes/CDMX010-cipher/blob/master/src/img/cipher.PNG">
</p>

En el perfil del Químico Preparador es donde se ingresará el mensaje cifrado que se desea descifrar.

<p align="center">
<img height="200" widht="400" src="https://github.com/andreaGuzes/CDMX010-cipher/blob/master/src/img/cipher-text.PNG">
  <img height="200" widht="400" src="https://github.com/andreaGuzes/CDMX010-cipher/blob/master/src/img/decode-text.PNG">
</p>

## 3. Stack tecnológico

Cosmos se desarrollo principalmente con: HTML, CSS y JavaScript.

<p align="center">
<img height="100" widht="400" src="https://github.com/andreaGuzes/CDMX010-cipher/blob/master/src/img/stack.png">
</p>
