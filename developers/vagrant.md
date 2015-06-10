---
layout: page
title:  Vagrant
permalink: /developers/vagrant/
categories: developers
---

## Introduction

[Vagrant](https://www.vagrantup.com) is development environment tool that you can easily run on almost every operating system. This is really useful if you want to install something being developed by someone who uses a different operating system & dependencies than you. For instance, installing PostGreSQL and many Linux dependencies on Mac OS can be quite challenging—just contain it all in a Linux Virtual Machine controlled by Vagrant.

### Installing Vagrant

Install Vagrant itself by downloading

    https://www.vagrantup.com/downloads.html

Import a Ubuntu image

    $ vagrant init ubuntu/trusty64

Start the Vagrant machine

    $ vagrant up

Login into your Vagrant machine via ssh

    $ vagrant ssh 


### Installing Web Apps

Once your Vagrant instance is up and running, your terminal should look like:

    vagrant@vagrant-ubuntu-trusty-64:~$ 

From here are SSH'd into your Vagrant virtual machine. Now, to start working with a codebase. 

Navigate to the **Vagrant shared folder**

    vagrant@vagrant-ubuntu-trusty-64:~$ cd /vagrant/your-dev-folder

Find the Git repo you would like to clone:

    vagrant@vagrant-ubuntu-trusty-64:/vagrant$ git clone git@github.com:user/your-repo-name

Go about installing & configuring the repo you just installed from inside your Vagrant virtual machine.

**Memory Note**
Some dependencies used by some apps are quite large. In order to install these you will need to increase the memory of your Vagrant by editing the `Vagrantfile` and specifically `vb.memory` setting.
    
    ```
      config.vm.provider "virtualbox" do |vb|  
         # Customize the amount of memory on the VM:
         vb.memory = "2048" # was 512 before
      end
    ```

For this change to take effect, you'll either have to reload your Vagrant or halt and restart it. Do either by typing the following in a CLI outside of the VM:

    $ vagrant reload
    $ vagrant halt


### Accessing Web App

Once your web app is running successfully (from inside the VM), you'll probably want to view it in your web browser. You need to configure Vagrant to expose it's IP addresses to your normal operating system. Do that by uncommenting the following line in your `Vagrantfile`

    config.vm.network "private_network", ip: “192.168.33.10”

For this to take effect reload or halt + restart Vagrant


### Editing & Accessing Code

To edit code for a repo you just installed in Vagrant, you'll probably want to be doing this from your real operating system in your normal IDE. Up above you cloned your project into the **Vagrant shared folder** simply browse in your normal operating system to the same path where your `Vagrantfile` exists:

    /home/user/path/Vagrantfile
    /home/user/path/your-repo-name

Simply open up files in `your-repo-name` in your normal OS and IDE and you should be good to go.
