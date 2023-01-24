---
title: Modelos
description: Modelos usados en las tablas de hacienda para el cálculo de ITPs.
---

Aqui puedes encontrar todas los modelos de coches que se usan en nuestra base de datos y de hacienda para el cálculo de ITPs.

---

## Recurso

`https://api.swipoo.com/itp/cars`

```bash
curl 'https://api.swipoo.com/itp/cars/?brand=AUDI&enrollmentDate=2018-01-17&fuel=G'
```

### Parametros

```ts
brand: String;
enrollmentDate: Date;
fuel: Enum;
```

- **brand**: Cualquier marca del recurso `/brands`.  
- **enrollmentDate**: Fecha de matriculación, ejemplo del formato -> `2018-01-17`
- **fuel**: Tipos de combustible:
  - **D**(Diesel),
  - **Elc**(Eléctrico)
  - **G**(Gasolina)
  - **S**(Gasolina GLP)
  - **M**(Etanol + Gasolina/Bio)
  - **DyE**(Hibrido Diesel Eléctrico)
  - **GyE**(Hibrido Gasolina Eléctrico)

### Respuesta

La estructura de datos de la respuesta es un listado de modelos como la siguiente:

```js
{
  "cars":[
    {
      "brand":"AUDI",
      "model":"A1 1.0 TFSI ACTIVE KIT",
      "periodStart":"2015",
      "periodEnd":"2019",
      "cc":"999",
      "fuel":"G",
      "kw":"70",
      "cvf":"7,83",
      "cv":"95",
      "value":"15700",
      "cylinders":"3"
    },
    {
      "brand":"AUDI",
      "model":"A1 1.0 TFSI ACTIVE KIT S TRONIC",
      "periodStart":"2015",
      ...
    },
    ...
  ]
}
```

---

##### Datos actualizados

Estos datos se actualizan cada vez que se publican y se aprueban los precios medios de venta aplicables en la gestión del Impuesto sobre Transmisiones Patrimoniales y Actos Jurídicos Documentados, Impuesto sobre Sucesiones y Donaciones e Impuesto Especial sobre Determinados Medios de Transporte por Hacienda.

Ultima actualización: [BOE-A-2022-21577](https://www.boe.es/eli/es/o/2022/12/14/hfp1259)