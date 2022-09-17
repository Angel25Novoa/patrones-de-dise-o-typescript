# Patrones de diseño 

Estos patrones de diseño ejecutados con las ventajas proveidas por __Typescript__, son algunos de los más comúnes en la industria.

El realizar estos patrones por medio del superset Typescript nos permite tener un mejor control de lo que recibe cada clase en el momento de su implementación.

## Interface:

Contrato que nos obliga a respetar sus anexos siendo estos campos, propiedades o métodos, es decir que toda clase que aplique una interfaz está obligada a cumplir lo que dice la interfaz que tenemos que hacer.

## Context:

# Patrones de diseño que usan un contexto para ejecutar distintos comportamientos

## State

Permite alterar el comportamiento de un objeto cuando su estado cambia

Este patrón sugiere que crees nuevas clase para todos los estados posibles y que en esas clases almacenes todos los posibles comportamientos que pueda tener el objeto.

Es muy similar al patrón **Strategy** con la diferencia de que en el patrón de diseño **State** los diferentes estados pueden conocerse entre si lo cual no sucede en **Strategy** 

![State.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82c97c10-74b9-4252-80f7-fbd22b342602/State.png)

## Strategy

Se utiliza cuando necesitas variantes de un mismo algoritmo dentro de un objeto para poder ejecutar distintos comportamientos (cambiar el comportamiento del objeto durante el tiempo de ejecución).

También puede ser usado cuando existan muchas clases similares donde solo se diferencien en su forma de ejecución.

Este patrón también permite que agregar funcionalidades a los objetos sea mas sencillo ya que siempre podemos agregar las estrategias necesarias para cumplir con el objetivo deseado.

![Strategy.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/856ae20b-5a8c-485b-9b16-76eb99418b84/Strategy.png)

# Patrones de diseño sin necesidad de un contexto

## Singleton

Este patrón de diseño permite sí o sí tener solo un objeto de dicha clase, esto puede ser usado con datos que difícilmente van a cambiar o con objetos que deseamos proteger.

## Bridge

Bridge permite dividir una clase grande o un grupo de clases estrechamente relacionadas en dos jerarquías.

**Abstracción**:

- Lógica de alto nivel
- Delega el trabajo pesado a la implementación
- En el mundo real normalmente es representado por una Interfaz de usuario (GUI)

**Implementación**

- Lógica de bajo nivel
- Es el que realiza el trabajo pesado
- Normalmente es representada en el mundo real por una plataforma (API)

## Observer

Es un patrón de diseño de comportamiento que te permite definir un mecanismo de suscripción para notificar a varios objetos sobre cualquier evento que le suceda al objeto que están observando.

![Observer.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d953742-e6cb-4b95-a99d-75c3b716e42a/Observer.png)

## Decorator

Es un patrón de diseño estructural que te permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.

Cada decorador tiene una funcionalidad y por esto puede haber decoradores que tengan decoradores dentro y esto nos ayuda a agregar funcionalidades sin limite a las clases que usan este patrón de diseño.

![Decorator.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79248855-9144-4821-80b0-2546b46f124a/Decorator.png)

## Builder

Crea un objeto que contiene un conjunto de métodos encadenados y puedes seleccionar los métodos que usarás dependiendo de las necesidades que tengas en tu objeto, también nos permite construir objetos complejos paso a paso. El patrón nos permite producir distintos tipos y representaciones de un objeto empleando el mismo código de construcción.

![Builder.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bbad445c-f67d-4f4c-aaf3-e8d7ed607800/Builder.png)

# Patrones de diseño importantes en React

## High order component

HOC es usado para crear componentes nuevos con funcionalidades en común