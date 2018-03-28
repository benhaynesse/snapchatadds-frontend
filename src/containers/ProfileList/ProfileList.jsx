import React, { Component } from 'react'

import {Profile} from '../../components/Profile.jsx';

const dummyData = [{
  "name": "Bec",
  "photos": [
  "http://images.gotinder.com/58b9701d208d289b6a1fa129/3dcfc547-876f-4ad3-957b-922ead2da705.jpg",
  "http://images.gotinder.com/58b9701d208d289b6a1fa129/ce646f15-d181-401b-8e39-96f3d7c62b10.jpg",
  "http://images.gotinder.com/58b9701d208d289b6a1fa129/054787e7-ac32-48fa-82b3-36c5d3f9b0c8.jpg",
  "http://images.gotinder.com/58b9701d208d289b6a1fa129/1080x1080_2766be05-b361-4b5f-8c84-63ad51c6e878.jpg",
  "http://images.gotinder.com/58b9701d208d289b6a1fa129/1080x1080_6be40ec9-c600-4a0c-8c54-d237fdbaa3ef.jpg"
  ],
  "gender": "1",
  "id": "58b9701d208d289b6a1fa129",
  "bio": "Probably more sarcastic than you are…\n\nSC 👻- beccaalouise",
  "distance": "10",
  "snapchat": "SC 👻-",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
    "name": "Kyle",
    "photos": [
    "https://images-ssl.gotinder.com/56f80180af90ee9755c339fe/1080x1080_c0f6d925-a53c-4e3e-9c3e-b5f3230aea9f.jpg",
    "https://images-ssl.gotinder.com/56f80180af90ee9755c339fe/1080x1080_41276c91-084b-43a9-826e-f8ba2fa642a0.jpg",
    "https://images-ssl.gotinder.com/56f80180af90ee9755c339fe/6a8b0930-254d-43e4-a258-17babe33fb4b.jpg",
    "https://images-ssl.gotinder.com/56f80180af90ee9755c339fe/b0c4c34f-d117-4534-8829-627056b4e237.jpg",
    "https://images-ssl.gotinder.com/56f80180af90ee9755c339fe/5be31ce5-512c-4b07-8ccf-dc4bed4d0c6a.jpg",
    "https://images-ssl.gotinder.com/56f80180af90ee9755c339fe/4fe8f192-6fdd-418c-8bec-c4a9a7ac9e13.jpg"
    ],
    "gender": "0",
    "id": "56f80180af90ee9755c339fe",
    "bio": "Snapchat - imkyleminers\nInstagram - imkyleminers",
    "distance": "41",
    "scanned": true,
    "snapchat": "imkyleminers",
    "selected": true
    },
  {
  "name": "Lau-Ren",
  "photos": [
  "http://images.gotinder.com/564f43af3ffcdb01176290b7/1080x1080_10bdfee0-92a4-4c29-8281-4fb9c2b1de06.jpg",
  "http://images.gotinder.com/564f43af3ffcdb01176290b7/1080x1080_930d11f8-1303-449e-8dc9-8b028775a586.jpg",
  "http://images.gotinder.com/564f43af3ffcdb01176290b7/1080x1080_e0f86463-c2be-40b5-9b1a-7a7fa65a6968.jpg",
  "http://images.gotinder.com/564f43af3ffcdb01176290b7/1080x1080_aa4ac3b6-c065-4b7c-84f6-7742359a19cc.jpg",
  "http://images.gotinder.com/564f43af3ffcdb01176290b7/1080x1080_bd61ecdd-ad46-47ab-8644-0eb60ad0526f.jpg",
  "http://images.gotinder.com/564f43af3ffcdb01176290b7/1080x1080_25a21b93-8998-4026-93c7-7778dabd68ae.jpg"
  ],
  "gender": "1",
  "id": "564f43af3ffcdb01176290b7",
  "bio": "👫🌈👭💕\nLoves a bit of Banter \n\n👻Sc: lozzbear \n📸Insta: woah_lauren",
  "distance": "1",
  "snapchat": "lozzbear",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Vanessa",
  "photos": [
  "http://images.gotinder.com/571a1a83403e496615ac250e/1080x1080_481aa359-5e99-4f89-a5a8-1dd2db575b3c.jpg",
  "http://images.gotinder.com/571a1a83403e496615ac250e/1080x1080_e72e659b-8ab7-4656-8564-48e8ee6d789b.jpg",
  "http://images.gotinder.com/571a1a83403e496615ac250e/1080x1080_2e8cf63e-87f5-4fc6-89ab-04e2c64f7aae.jpg",
  "http://images.gotinder.com/571a1a83403e496615ac250e/1080x1080_5c47f112-272e-4618-8215-ca359e0eb41a.jpg",
  "http://images.gotinder.com/571a1a83403e496615ac250e/1080x1080_34e17668-2223-4d61-9b6b-2d47ab550c52.jpg",
  "http://images.gotinder.com/571a1a83403e496615ac250e/1080x1080_3d2affd1-7a9c-456a-8829-c7177c678016.jpg"
  ],
  "gender": "1",
  "id": "571a1a83403e496615ac250e",
  "bio": "Sc- Vanvanessa21\nInsta- nessyy7\n\nI just want to get to know your dog that’s all",
  "distance": "3",
  "snapchat": "Vanvanessa21",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Lauren",
  "photos": [
  "http://images.gotinder.com/587232597d01c5794f0ce244/1080x1080_a74d9330-f4e7-4796-a1d7-44c21357f0d6.jpg",
  "http://images.gotinder.com/587232597d01c5794f0ce244/110be4ea-0d3d-40a9-8b5b-df011bc30516.jpg",
  "http://images.gotinder.com/587232597d01c5794f0ce244/1080x1080_b96e238b-a62e-4547-9d05-96c33fde5068.jpg",
  "http://images.gotinder.com/587232597d01c5794f0ce244/1080x1080_f2fa6fd0-d6be-4eaa-88b8-8253b2a8398c.jpg",
  "http://images.gotinder.com/587232597d01c5794f0ce244/1080x1080_f4fb284b-4976-4b66-8ea4-d0ae7fb86a2c.jpg",
  "http://images.gotinder.com/587232597d01c5794f0ce244/1080x1080_a2c88fb6-7e5a-423b-988e-ac46bdafe3ae.jpg"
  ],
  "gender": "1",
  "id": "587232597d01c5794f0ce244",
  "bio": "two truths & a lie... \n- I'm allergic to alcohol\n- I got with a random on an aeroplane \n- I almost died skydiving \n\nI appreciate a good beard  \n\nSnap: lauren.gorman",
  "distance": "2",
  "snapchat": "lauren.gorman",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Jazlyn",
  "photos": [
  "http://images.gotinder.com/52da8c539c4493ef0e000ab8/f9a09ee6-a035-4ca8-836f-684dbd3cf630.jpg",
  "http://images.gotinder.com/52da8c539c4493ef0e000ab8/f6f37123-8693-4bd5-8e9e-837902252666.jpg",
  "http://images.gotinder.com/52da8c539c4493ef0e000ab8/1080x1080_96f08e57-58ab-4b10-ac78-923b8e592ae0.jpg",
  "http://images.gotinder.com/52da8c539c4493ef0e000ab8/1080x1080_8cceab1c-bba4-4a29-8bfa-645afab87dda.jpg",
  "http://images.gotinder.com/52da8c539c4493ef0e000ab8/1080x1080_935fe070-a3d8-4673-8807-adae03117478.jpg",
  "http://images.gotinder.com/52da8c539c4493ef0e000ab8/3bd0e068-b458-4e98-89a2-a3b1878fc4b8.jpg"
  ],
  "gender": "1",
  "id": "52da8c539c4493ef0e000ab8",
  "bio": ".i love metropolis Fremantle \n.if you're having a wine tour can I come\n\nI also sometimes smell good and my face skin is soft hmu\nInsta-jazlyn_slippers \nSnapchat-Slutzilla.x",
  "distance": "8",
  "snapchat": "Slutzilla.x",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Jazz",
  "photos": [
  "http://images.gotinder.com/5363a69ca5ed57f56b000b4f/1080x1080_4d8e7d8e-595e-4b63-8541-42688fbdb64f.jpg",
  "http://images.gotinder.com/5363a69ca5ed57f56b000b4f/ec9d9947-81ee-4ca7-9797-de417ceae3ea.jpg",
  "http://images.gotinder.com/5363a69ca5ed57f56b000b4f/1080x1080_271f3ff4-bd2b-4d50-8e89-f698d6846a24.jpg",
  "http://images.gotinder.com/5363a69ca5ed57f56b000b4f/1080x1080_c54509e7-f4fc-4252-a729-90153ba27629.jpg"
  ],
  "gender": "1",
  "id": "5363a69ca5ed57f56b000b4f",
  "bio": "I'm just here for a good time \n\nsnapchat: jazz1996\nInstagram: jaaazvuk_",
  "distance": "5",
  "snapchat": "jazz1996",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Keeley",
  "photos": [
  "http://images.gotinder.com/55013df92b93f18e5c193193/1080x1080_8c2a078a-a0c5-437c-aacd-7480afd16b90.jpg",
  "http://images.gotinder.com/55013df92b93f18e5c193193/1080x1080_eeca1433-1ca6-4071-aeb1-738f14c52d0d.jpg",
  "http://images.gotinder.com/55013df92b93f18e5c193193/1080x1080_012f8d06-a5aa-4367-adf0-84e94671cf42.jpg",
  "http://images.gotinder.com/55013df92b93f18e5c193193/1080x1080_a878f74e-a1c0-4db2-9ffb-1673ad2cb286.jpg"
  ],
  "gender": "1",
  "id": "55013df92b93f18e5c193193",
  "bio": "Here for a laugh or whatever 🍁🍁\n\nSnapchat keels840",
  "distance": "21",
  "snapchat": "keels840",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Kirsty",
  "photos": [
  "http://images.gotinder.com/53dd7ed2c92e62605360a098/fd4b977b-efd6-42c9-8e1a-98190397f200.jpg",
  "http://images.gotinder.com/53dd7ed2c92e62605360a098/e7d83b77-5112-4b80-9a9d-6b73d09e82d1.jpg",
  "http://images.gotinder.com/53dd7ed2c92e62605360a098/f94090f3-8f96-49c2-86da-bf289f7ccf60.jpg",
  "http://images.gotinder.com/53dd7ed2c92e62605360a098/b0415e3f-76bf-4ffd-8208-7d380b3b4c05.jpg"
  ],
  "gender": "1",
  "id": "53dd7ed2c92e62605360a098",
  "bio": "Snapchat : kjoyce948 ... instagram : kirstyljoyce",
  "distance": "3",
  "snapchat": "kjoyce948",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Leesa",
  "photos": [
  "http://images.gotinder.com/57556c34966e93a60bfe9b16/80a43669-8e32-439c-860e-aa136a4062e7.jpg",
  "http://images.gotinder.com/57556c34966e93a60bfe9b16/1080x1080_379de106-5e9d-4a02-a01e-58fcede9ae57.jpg",
  "http://images.gotinder.com/57556c34966e93a60bfe9b16/1080x1080_24c55654-49c5-48b0-bbf1-3ddd5411ec17.jpg",
  "http://images.gotinder.com/57556c34966e93a60bfe9b16/1080x1080_df66b438-995e-4b8f-83f6-95da9f9f090b.jpg",
  "http://images.gotinder.com/57556c34966e93a60bfe9b16/1080x1080_cd03f3a4-6d7a-495c-877a-6419e56c050d.jpg",
  "http://images.gotinder.com/57556c34966e93a60bfe9b16/1080x1080_b56e493e-e012-4c3e-a252-84f1a43e3fd8.jpg"
  ],
  "gender": "1",
  "id": "57556c34966e93a60bfe9b16",
  "bio": "Looking for someone to sing \"whatever you like by TI\" to me and mean it 🤑😂\n\nStudying to be a Early Childhood Teacher 📚\n\nLalaleesy on Snapchat and Instagram.",
  "distance": "4",
  "snapchat": "Snapchat and",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Shania",
  "photos": [
  "http://images.gotinder.com/58c7d550202575e10eb5adf4/394455a9-4017-4563-8f45-1b3cf2c3cecf.jpg",
  "http://images.gotinder.com/58c7d550202575e10eb5adf4/3251e134-c43d-4f2f-8af8-e4eabfb2da33.jpg",
  "http://images.gotinder.com/58c7d550202575e10eb5adf4/3c598c08-1315-4a63-94da-137449935a69.jpg",
  "http://images.gotinder.com/58c7d550202575e10eb5adf4/0ab58d2f-0447-40ec-86e1-305d5902ed5a.jpg",
  "http://images.gotinder.com/58c7d550202575e10eb5adf4/1080x1080_d79b4229-183a-4721-900c-925390124fee.jpg",
  "http://images.gotinder.com/58c7d550202575e10eb5adf4/1080x1080_f19dc454-0f88-4edd-8225-191fb153ae37.jpg"
  ],
  "gender": "1",
  "id": "58c7d550202575e10eb5adf4",
  "bio": "Swipe right for a chat 😝\nAdd my snapchat 👻 : Shania.grant\nLooking for a sugar daddy 🍭👴🏽",
  "distance": "4",
  "snapchat": "snapchat 👻",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Siobhán",
  "photos": [
  "http://images.gotinder.com/5964e7ecf64fff1e615d0e9a/1a405626-664d-4e8d-85e0-ceded40819e4.jpg",
  "http://images.gotinder.com/5964e7ecf64fff1e615d0e9a/a77c758f-67ec-4b06-b0d3-c2580d9f9d7a.jpg",
  "http://images.gotinder.com/5964e7ecf64fff1e615d0e9a/c5e31e29-b337-43d5-8c05-c6344cf0b150.jpg",
  "http://images.gotinder.com/5964e7ecf64fff1e615d0e9a/eabbec2d-e5d0-49a0-80af-5605136f6803.jpg",
  "http://images.gotinder.com/5964e7ecf64fff1e615d0e9a/6ea67bc9-76eb-443d-8cab-cdee431783a7.jpg",
  "http://images.gotinder.com/5964e7ecf64fff1e615d0e9a/1080x1080_cd65bb52-e617-4a67-974a-d17dd7453d3e.jpg"
  ],
  "gender": "1",
  "id": "5964e7ecf64fff1e615d0e9a",
  "bio": "SC : xxosiobhanoxx ",
  "distance": "7",
  "snapchat": "xxosiobhanoxx",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Amber",
  "photos": [
  "http://images.gotinder.com/5286f404c9103f9f690003a8/1080x1080_a8630ef2-3c3c-4aaa-a390-212d56ed307b.jpg",
  "http://images.gotinder.com/5286f404c9103f9f690003a8/1080x1080_bcfd86d8-c20d-43ba-922d-7b3615a02341.jpg",
  "http://images.gotinder.com/5286f404c9103f9f690003a8/1080x1080_acba2e4c-6ab4-4df7-8b61-42360ae96b32.jpg",
  "http://images.gotinder.com/5286f404c9103f9f690003a8/1080x1080_72a47652-2cfc-4f8a-8b24-36579ff267e5.jpg",
  "http://images.gotinder.com/5286f404c9103f9f690003a8/1080x1080_86417489-3afe-495c-a241-266692800980.jpg",
  "http://images.gotinder.com/5286f404c9103f9f690003a8/1080x1080_6c0a7f32-bff6-452b-86a2-cdc6bd37fa02.jpg"
  ],
  "gender": "1",
  "id": "5286f404c9103f9f690003a8",
  "bio": "Cool cool cool cool cool cool cool cool\n📸📸: _ambersanders\nsc: ambs24",
  "distance": "5",
  "snapchat": "ambs24",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Beige",
  "photos": [
  "http://images.gotinder.com/5731a1eb3bcc8ce01b981193/1080x1080_e2d01a9b-c582-465c-9492-769d58787d07.jpg",
  "http://images.gotinder.com/5731a1eb3bcc8ce01b981193/2d46506f-ef84-4b7f-a2f1-a454e9acbe24.jpg",
  "http://images.gotinder.com/5731a1eb3bcc8ce01b981193/d0fdc873-2e02-4def-9d45-03a2f124d824.jpg"
  ],
  "gender": "1",
  "id": "5731a1eb3bcc8ce01b981193",
  "bio": "I feel good\nI feel nice\nI've never felt so\nSatisfied\nI'm in love\nI'm alive\nIntoxicated\nFlying high\n\nSnap: beige92",
  "distance": "6",
  "snapchat": "beige92",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Nicola",
  "photos": [
  "http://images.gotinder.com/56e138fee8b5b9025a51a849/1080x1080_8d655ce5-fe5a-4364-8eb8-70e6a61fc527.jpg",
  "http://images.gotinder.com/56e138fee8b5b9025a51a849/1080x1080_3946c700-d05f-4a9c-8c7e-c754ea808728.jpg",
  "http://images.gotinder.com/56e138fee8b5b9025a51a849/1080x1080_a4bae49b-87bb-4c5f-b1e0-84095f01a2f1.jpg",
  "http://images.gotinder.com/56e138fee8b5b9025a51a849/1080x1080_8668a969-641f-4adc-b4e0-40afa1c66ca7.jpg",
  "http://images.gotinder.com/56e138fee8b5b9025a51a849/1080x1080_720aafab-a60f-4a62-8a4d-8e7681bb982e.jpg",
  "http://images.gotinder.com/56e138fee8b5b9025a51a849/1080x1080_11dae9f8-486a-40e6-8162-2f222e686b25.jpg"
  ],
  "gender": "1",
  "id": "56e138fee8b5b9025a51a849",
  "bio": "Really just looking for a nice lad who will buy a puppy with me ✨💑🐶\n\nSnapchat 👻 - nicolakean",
  "distance": "8",
  "snapchat": "Snapchat 👻",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Maddy",
  "photos": [
  "http://images.gotinder.com/59c86c139e960d903d0536bf/1080x1080_b13ad9d7-c1e3-44c1-afa6-b6d2e6a980b9.jpg",
  "http://images.gotinder.com/59c86c139e960d903d0536bf/1080x1080_3ca5e004-528b-47ae-a233-dd9c07e90995.jpg",
  "http://images.gotinder.com/59c86c139e960d903d0536bf/1080x1080_97a2420b-247a-4557-8723-3ab9cada1016.jpg",
  "http://images.gotinder.com/59c86c139e960d903d0536bf/1080x1080_9124ac38-1e76-4740-8766-4bcbefda6306.jpg",
  "http://images.gotinder.com/59c86c139e960d903d0536bf/1080x1080_572c8f54-6d98-401a-9dc9-e83d6ac49069.jpg",
  "http://images.gotinder.com/59c86c139e960d903d0536bf/1080x1080_e44634a9-4325-412a-892f-fdb5fe7f14ad.jpg"
  ],
  "gender": "1",
  "id": "59c86c139e960d903d0536bf",
  "bio": "Snapchat : maddybae0 add me \n\nIM FAT SO IF YOU DONT LIke it good \n\nI just want someone to take me out for food\n \nLow key dork 💡🚻♌🎤🎧📝\n\nI'm 5'2 😇 I have a cat 🐱 I love to sing 🎤 I am crazy sometimes but in a good way I hate walking but I wanna go back to the gym coz I'm not skinny yes that means I do have fat on me and if you don't like it good for you ",
  "distance": "9153",
  "snapchat": "maddybae0",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Jasmin",
  "photos": [
  "http://images.gotinder.com/5a1f4b236c976bae6fb17ed1/1080x1080_068df5e4-a3f0-4afb-a94d-7b7c2ad487e1.jpg",
  "http://images.gotinder.com/5a1f4b236c976bae6fb17ed1/1080x1080_858cc235-03bc-4098-9b77-876353bb4885.jpg",
  "http://images.gotinder.com/5a1f4b236c976bae6fb17ed1/1080x1080_65dc1c30-2fc9-4e11-8c48-221589c90c2a.jpg",
  "http://images.gotinder.com/5a1f4b236c976bae6fb17ed1/1080x1080_46e1e81f-4361-43b8-87c5-39d97261dc50.jpg",
  "http://images.gotinder.com/5a1f4b236c976bae6fb17ed1/1080x1080_7b5d90fb-5e80-412e-b1a7-02b80d4579aa.jpg",
  "http://images.gotinder.com/5a1f4b236c976bae6fb17ed1/1080x1080_328cc87b-0970-48cd-b50e-61a1d5a5fcc0.jpg"
  ],
  "gender": "1",
  "id": "5a1f4b236c976bae6fb17ed1",
  "bio": "Can I get uhhhhh cute guy who likes chubby girls 🤷🏻‍♀️\n\nJust looking for a daddy 😛🎀\n\nSnap: jjasminskye \nInsta: jasminbitchhx",
  "distance": "9190",
  "snapchat": "jjasminskye",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Steph",
  "photos": [
  "http://images.gotinder.com/5a476aac702237291d150529/1080x1080_fc803eb5-5efc-47bf-a722-94f2f527a685.jpg",
  "http://images.gotinder.com/5a476aac702237291d150529/1080x1080_76c40a79-4c2b-4348-8ba5-f2cd15c258da.jpg",
  "http://images.gotinder.com/5a476aac702237291d150529/1080x1080_b34215dd-5ac2-4153-b5ee-7e9522d19d55.jpg",
  "http://images.gotinder.com/5a476aac702237291d150529/1080x1080_67c100ec-c491-4434-8c0a-056b8ad79ee1.jpg",
  "http://images.gotinder.com/5a476aac702237291d150529/1080x1080_3f6fa259-ac47-4182-98be-fe3a084c28b4.jpg",
  "http://images.gotinder.com/5a476aac702237291d150529/1080x1080_43c6053f-871b-4a4a-b2fc-0d69498113dc.jpg"
  ],
  "gender": "1",
  "id": "5a476aac702237291d150529",
  "bio": "Looking for my vanilla whipped cream white boy. \n\nSnapchat-stephcastillo27",
  "distance": "9167",
  "snapchat": "stephcastillo27",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Emily",
  "photos": [
  "http://images.gotinder.com/52908fcdc7e9b301570001ae/81156531-eb63-4387-89f9-69fffcfa8f88.jpg",
  "http://images.gotinder.com/52908fcdc7e9b301570001ae/f86269e7-483b-4fea-9564-2aa31af7a713.jpg",
  "http://images.gotinder.com/52908fcdc7e9b301570001ae/e1d4510b-606a-4b2e-8ab4-0a9bba3f1fbf.jpg",
  "http://images.gotinder.com/52908fcdc7e9b301570001ae/d16c7d79-6c88-42c1-9800-954f185ec935.jpg",
  "http://images.gotinder.com/52908fcdc7e9b301570001ae/090b1fa3-babb-4309-8714-eb2d73b74212.jpg",
  "http://images.gotinder.com/52908fcdc7e9b301570001ae/693ce7f7-9a4f-4394-97de-77786637a66e.jpg"
  ],
  "gender": "1",
  "id": "52908fcdc7e9b301570001ae",
  "bio": "Criminology and justice student, horse rider, single. \nFun easy going chick. Like to just chill and have fun! \nNot looking for a nail and bail, smash and dash, fuck and chuck or a root and boot 👍 so if that's u keep swiping 💁🏼\nSnapchat emily101yo",
  "distance": "9154",
  "snapchat": "emily101yo",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Emily",
  "photos": [
  "http://images.gotinder.com/58f5ad24ccf657457e167af3/1080x1080_ce501d17-c5d8-4f6b-8033-a8404d7dd39e.jpg",
  "http://images.gotinder.com/58f5ad24ccf657457e167af3/1080x1080_2122e760-1c70-4244-bef3-55d59203dca2.jpg",
  "http://images.gotinder.com/58f5ad24ccf657457e167af3/1080x1080_ba46d6e0-1b59-42bb-8f95-fcfe77a564c9.jpg",
  "http://images.gotinder.com/58f5ad24ccf657457e167af3/00a40b45-df1d-4712-b553-e1615cdac939.jpg",
  "http://images.gotinder.com/58f5ad24ccf657457e167af3/75a41c3d-e2dc-4897-8742-af3e4eca647f.jpg",
  "http://images.gotinder.com/58f5ad24ccf657457e167af3/1080x1080_c2e29724-fe25-4ab1-ab3c-3fad5b7b279b.jpg"
  ],
  "gender": "1",
  "id": "58f5ad24ccf657457e167af3",
  "bio": "🇦🇺/🇭🇷\n5ft little muffin • Taurus • Bali is my fave place ✨ \nThere's no denying I love a good Snapchat filter 💁🏽",
  "distance": "9174",
  "snapchat": "filter",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Monique",
  "photos": [
  "http://images.gotinder.com/5942978fa03189e43f9f942d/6d86e5e7-9cee-4e66-834b-d76f477d7a9c.jpg",
  "http://images.gotinder.com/5942978fa03189e43f9f942d/c6edd230-a1a5-4a7c-93fa-ed8269aa8764.jpg",
  "http://images.gotinder.com/5942978fa03189e43f9f942d/0990e88c-9e9d-4c55-9930-c616890eaa0c.jpg",
  "http://images.gotinder.com/5942978fa03189e43f9f942d/1080x1080_2dcec77a-5fdd-47e6-8f82-c30cc3a2e165.jpg",
  "http://images.gotinder.com/5942978fa03189e43f9f942d/1080x1080_a3fd5b80-16d8-4b6f-817f-76982483f98b.jpg"
  ],
  "gender": "1",
  "id": "5942978fa03189e43f9f942d",
  "bio": "Movies, drinks, adventures, friends, family, sums me up. I like food don’t judge\n\nIn 3 words describe yourself\n\nSnapchat- Mcoetza \nInstagram- moncoetzer",
  "distance": "9180",
  "snapchat": "Mcoetza",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Billy",
  "photos": [
  "http://images.gotinder.com/5426e1e84776848653b81132/1080x1080_f90d9fc8-d3bc-4ddb-87ed-3bb34fa75fe5.jpg",
  "http://images.gotinder.com/5426e1e84776848653b81132/ffd9e879-f54e-45da-8fac-0ae7ea1e58b4.jpg",
  "http://images.gotinder.com/5426e1e84776848653b81132/1080x1080_826bf36b-48ae-4260-babb-661020a8e448.jpg",
  "http://images.gotinder.com/5426e1e84776848653b81132/1080x1080_7d18ac81-90b9-44d9-a467-3b19903fc236.jpg",
  "http://images.gotinder.com/5426e1e84776848653b81132/1b2525cb-1c51-4ec7-9dbd-e2b3143ce3bb.jpg",
  "http://images.gotinder.com/5426e1e84776848653b81132/1080x1080_3825f48a-098c-4134-8da4-01eff63f697f.jpg"
  ],
  "gender": "1",
  "id": "5426e1e84776848653b81132",
  "bio": "I'm 20❤️\nI want a guy that we can be complete assholes to each other but know we are joking \nInsta- billay_xox \nSnapchat- billy_xox\n🍕🍕🍕",
  "distance": "9178",
  "snapchat": "billy_xox",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Aaliyah",
  "photos": [
  "http://images.gotinder.com/58d129bd1a0535e6623289c5/1080x1080_934baef3-31e6-4284-820c-8fb3040d4339.jpg",
  "http://images.gotinder.com/58d129bd1a0535e6623289c5/1080x1080_3557a706-d35f-4ec3-8628-2cb3a344e6a2.jpg",
  "http://images.gotinder.com/58d129bd1a0535e6623289c5/1080x1080_648a3cb6-f7be-4185-a90e-ee6e8f675184.jpg",
  "http://images.gotinder.com/58d129bd1a0535e6623289c5/1080x1080_a36a5da8-3023-466e-a13d-17d8cc594570.jpg",
  "http://images.gotinder.com/58d129bd1a0535e6623289c5/1080x1080_c5037bbb-c1c3-4623-bc58-ad911c1224aa.jpg",
  "http://images.gotinder.com/58d129bd1a0535e6623289c5/1080x1080_62642b82-d332-41a8-8162-f00664bf7fcb.jpg"
  ],
  "gender": "1",
  "id": "58d129bd1a0535e6623289c5",
  "bio": "Snap: aaliyahpedersen",
  "distance": "9177",
  "snapchat": "aaliyahpedersen",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Sophie",
  "photos": [
  "http://images.gotinder.com/592fc2e62a2b00676fff9148/1080x1080_41aba3e4-9e41-4c1c-9295-0a61cd624135.jpg",
  "http://images.gotinder.com/592fc2e62a2b00676fff9148/1080x1080_a36459d8-3196-48e9-9fd5-3d08e9d19f6a.jpg",
  "http://images.gotinder.com/592fc2e62a2b00676fff9148/1080x1080_432a7660-b746-414e-8954-2367ca59cca7.jpg",
  "http://images.gotinder.com/592fc2e62a2b00676fff9148/1080x1080_82b4b6ab-6f95-49c7-8466-02cd15631d63.jpg",
  "http://images.gotinder.com/592fc2e62a2b00676fff9148/1080x1080_edeafa68-102c-4b70-99e8-500a75980444.jpg",
  "http://images.gotinder.com/592fc2e62a2b00676fff9148/1080x1080_d6d60afb-e604-4b1d-8d72-9497c0f6540c.jpg"
  ],
  "gender": "1",
  "id": "592fc2e62a2b00676fff9148",
  "bio": "Actually 18🙃I'm just under 5ft I'm pretty chilled and loves tattoos 😝👌🏻🍁😎💊I'm a type 1 diabetic💉 add me on sc so I can annoy ya 💁🏻",
  "distance": "9177",
  "snapchat": "sc so",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Chelsea",
  "photos": [
  "http://images.gotinder.com/58cbcec68828852f2a333a77/1080x1080_ff4b476a-4b59-4bba-8d95-4716a221bf7f.jpg",
  "http://images.gotinder.com/58cbcec68828852f2a333a77/75bf3bc9-ce14-4ac8-a99f-7f3a84050979.jpg",
  "http://images.gotinder.com/58cbcec68828852f2a333a77/9b4cd864-c30e-470f-8eb9-1ef4ba89fd9d.jpg",
  "http://images.gotinder.com/58cbcec68828852f2a333a77/1080x1080_5f8f52c8-2968-47f5-89a1-14a6a123a102.jpg",
  "http://images.gotinder.com/58cbcec68828852f2a333a77/1080x1080_4cea251d-eae5-4011-a4ed-c46b3fad7aaa.jpg",
  "http://images.gotinder.com/58cbcec68828852f2a333a77/1080x1080_137eebea-1c54-4d27-8167-9c8c086f56e3.jpg"
  ],
  "gender": "1",
  "id": "58cbcec68828852f2a333a77",
  "bio": "I’m tall, oh well (5'9)\nAll about that denim life \nMy forehead is big from all the disrespectful thoughts I keep to myself \nTell me terrible jokes \nIf I super like you, it was an accident... or was it\nSc: chelbel00\n🇪🇸 🇮🇹 🇦🇹 🇨🇭 🇩🇪 🇳🇱 🇬🇧",
  "distance": "9160",
  "snapchat": "chelbel00",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Nor",
  "photos": [
  "http://images.gotinder.com/59a13683646d298907cdb20f/1080x1080_fd5fb5af-52c5-4012-8c9c-810fd29bfd4d.jpg",
  "http://images.gotinder.com/59a13683646d298907cdb20f/1080x1080_68069820-28ae-47d5-89bb-7b35eae24348.jpg",
  "http://images.gotinder.com/59a13683646d298907cdb20f/1080x1080_afe21ec6-4faf-4c9c-aaa8-84884a2f1c35.jpg",
  "http://images.gotinder.com/59a13683646d298907cdb20f/1080x1080_8135b37c-b8dd-425a-a2e1-b2065e118500.jpg",
  "http://images.gotinder.com/59a13683646d298907cdb20f/1080x1080_3df08a51-26a8-4f3c-b923-bc8853a6a919.jpg"
  ],
  "gender": "1",
  "id": "59a13683646d298907cdb20f",
  "bio": "Nutella lover, food is amazing😂👄 Music is life 😌 If you listen to Migos, hit me up😌👅Love a good chat and the rest will fall into place😏🔥🔥 Snapchat: just ask😜\nHuge dog lover😍👌🏻",
  "distance": "9165",
  "snapchat": "Snapchat: just",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  {
  "name": "Leigh",
  "photos": [
  "http://images.gotinder.com/5981bf3f194ddc3959e5d4c3/ffe62300-8cf9-4cd8-81e1-edea656af561.jpg",
  "http://images.gotinder.com/5981bf3f194ddc3959e5d4c3/1080x1080_6ef7b6b1-eeed-4ce5-9240-91b16bb84d21.jpg",
  "http://images.gotinder.com/5981bf3f194ddc3959e5d4c3/1080x1080_24bed68a-8f71-4911-9f7b-fa7c2d62679c.jpg",
  "http://images.gotinder.com/5981bf3f194ddc3959e5d4c3/1080x1080_5908853c-e096-4150-8220-9f64e0adeb86.jpg",
  "http://images.gotinder.com/5981bf3f194ddc3959e5d4c3/1080x1080_f4df63c1-0aef-4775-ac76-9a2c63303a53.jpg",
  "http://images.gotinder.com/5981bf3f194ddc3959e5d4c3/1080x1080_2521fcfd-bde1-4721-b8d9-687b53d68ef2.jpg"
  ],
  "gender": "1",
  "id": "5981bf3f194ddc3959e5d4c3",
  "bio": "Hi my name is bec not Leigh I don't know why it did that or how to change it.\n\n\nSnapchat: little_onehug \n  I love bike riding,  movies, bowling, ice skating, TV binge watching, the casino, reading, hiking . I really want to talk to a guy with ambition and drive\n\nI'm currently training in the corrections field and  love a challenge and hope to meet someone that makes me laugh . \n \nI tend to go for older men to :P\n Does anyone even message anymore? #tallsmart\n",
  "distance": "9174",
  "snapchat": "little_onehug",
  "scanned": true,
  "clicked": true,
  "selected": true
  },
  
]
class ProfileList extends Component {
state = {
  profiles : []
}

componentWillMount(){
  let testDataUrl = `${window.location.origin}/dummydata.json`;
  fetch(testDataUrl)
    .then(res => res.json())
    .then(result => this.setState({profiles:result})) 
}

  render() {
    let profiles = this.state.profiles.map(profile => {
      return <Profile id={profile.id} key={profile.id} username={profile.snapchat} gender={profile.gender}
        photo={profile.photos[0]} age={profile.age}/>
    })
    return (
      <div className="container">
        {profiles}        
      </div>
    )
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default ProfileList;
