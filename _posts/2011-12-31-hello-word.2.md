---
layout: post
title: "Comunicação USB"
description: "description"
author: "Fábio da Silva Santana"
image: "avatar.jpg"
imageCover: ""
---

#Comunicação USB
O sistema android suporta uma grande variedade de perifericos USB e existe dois tipos de comunicação,
host e accessory.

modo USB Host.

Nesse modo o dispositivo android atua como o host. Equipamento que trabalham com uma uma grande quantidade de 
aplicações o Android geralmente atua como host. "Cameras, Teclados, controles, etc...".

modo USB Accessory.

Nesse modo o dispositivo android tem a função de acessório e o dispositivo conectado será o host. 

A diferença entre os dois modos é que quando o Android atua como host ele transfere energia para o dispositivo,
porem quando ele atua como accessory ele e recarregado.

O fato é que se a implementação do dispositivo que você for conectar no android for accessory o android terá que 
atuar como host e vice-versa.

USB HOST e USB ACCESSORY são suportadas diretamente pelas API 3.1 ou superior. USB accessory pode ser portada
para o Android 2.3.4(API 10) como uma library.

Classes importantes a serem consideradas.

UsbManager - Allows you to enumerate and communicate with connected USB devices.
UsbDevice - Represents a connected USB device and contains methods to access its identifying information, interfaces, and endpoints.
UsbInterface - Represents an interface of a USB device, which defines a set of functionality for the device. A device can have one or more interfaces on which to communicate on.
UsbEndpoint - Represents an interface endpoint, which is a communication channel for this interface. An interface can have one or more endpoints, and usually has input and output endpoints for two-way communication with the device.
UsbDeviceConnection - Represents a connection to the device, which transfers data on endpoints. This class allows you to send data back and forth sychronously or asynchronously.
UsbRequest - Represents an asynchronous request to communicate with a device through a UsbDeviceConnection.
UsbConstants - Defines USB constants that correspond to definitions in linux/usb/ch9.h of the Linux kernel.

O passo mais comum é utilizar o UsbManager para recuperar o periférico dessejado UsbDevice. Após isso é necessário
setar a UsbInterface e UsbEndpoint para completar a interface de comunicação com o dispositivo.
Agora podemos abrir uma conexão com UsbDeviceConnection.

Requerimentos necessários no Manifest

Alguns celulares não oferencem suporte ao USB Host então é interessante colocar como requerimento essa funcionalidade para o aplicativo que irá trabalhar como host

 <uses-feature android:name="android.hardware.usb.host" android:required="true" />
 
 O target minimum da aplicação tem que ser API 12 ou superior.
 
 Se você deseja que seu aplicativo seja informado quando um dispositivo for plugado na usb 
 use a intent-filter android.hardware.usb.action.USB_DEVICE_ATTACHED na main activity.
 
 O meta-data  apontando para um XML resources na pasta xml dentro de res é necessária para indentificar os
 dispositivos que você deseja ser informado quando plugado na usb.
 
 dentro do XML são declarados ubs-device 
 
 