# ansible-demo

## Description

Demo setup for testing of Ansible playbooks.

Consists of:
- 1 control-machine (Ubuntu Trusty Tahr)
- 3 managed-nodes (CentOS 7)

Some of the demo playbooks are based on [https://github.com/geerlingguy/ansible-for-devops].

## Prerequisites

- Vagrant 2.0.1+
- VirtualBox 5.1.30+

## How to Run

### Startup Vagrant VMs
```
cd <project-root>\control-machine
vagrant up
cd <project-root>\managed-nodes
vagrant up
```

### Connect to Control Machine
```
cd <project-root>\control-machine
vagrant ssh
```

### Run Ansible AdHoc Command
```
ansible -i /opt/ansible/inventories/hosts -m <module> -a <arguments>
```

### Run Ansible Playbook
```
ansible-playbook -i /opt/ansible/inventories/hosts /opt/ansible/playbooks/<playbook>.yml
```

### Shutdown Vagrant VMs
```
cd <project-root>\control-machine
vagrant destroy -f
cd <project-root>\managed-nodes
vagrant destroy -f
```