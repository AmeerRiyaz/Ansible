
# 🛠️ Ansible-WORK: From Basics to Advanced Project Automation

Welcome to **Ansible-WORK**, a comprehensive collection of Ansible playbooks and roles. This project was **built from scratch** with the goal of helping you master Ansible — from writing your first playbook to automating an end-to-end application deployment.

Whether you're just getting started or looking to apply Ansible to production-level use cases, this repository covers the full journey with **clean folder structures**, **modular design**, and **real-world examples**.

---

## 📚 Table of Contents

* [🧩 Project Overview](#-project-overview)
* [📁 Folder Structure Explained](#-folder-structure-explained)
* [🔍 What You'll Learn](#-what-youll-learn)
* [⚙️ How to Use This Project](#️-how-to-use-this-project)
* [🚀 Final Project Automation](#-final-project-automation)
* [👨‍💻 Author](#-author)
* [⭐ Support & Contributions](#-support--contributions)

---

## 🧩 Project Overview

This repository contains a **step-by-step journey into Ansible**, where I’ve explored:

* Basics like **ping modules, ad-hoc commands, and configuration**
* Intermediate concepts like **handlers, services, conditionals, and error handling**
* Advanced concepts like **Ansible Vault, roles, templates, and deployment strategies**
* A final real-world **automated project deployment** integrating all these concepts

Each concept is covered in its own dedicated folder and organized in a way that reflects best practices for scalability and clarity.

---

## 📁 Folder Structure Explained

```
ANSIBLE-WORK/
├── ansible-conditional/
├── ansible-handler/
├── ansible-vault/
├── deployment/
├── install-pre/
├── j2templates/
├── project/
├── roles/
│   └── python/
│       └── tasks/
├── .gitignore
├── ansible.cfg
├── install.yml
├── inventory.ini
└── playbook.yml
```

### 🔹 `ansible-conditional/`

Contains examples of `when`, `register`, `failed_when`, `loop` and `changed_when` statements. Demonstrates **conditional task execution** based on facts, variables, or output from other tasks.

### 🔹 `ansible-handler/`

Shows how to use **handlers** to respond to changes in task execution, such as restarting services only when needed (idempotent design).

### 🔹 `ansible-vault/`

Secure your secrets using **Ansible Vault**. Contains playbooks that demonstrate encrypting variables, using vault files, and prompting for vault passwords at runtime.

### 🔹 `deployment/`

Advanced deployment strategies such as **rolling updates, batch deployments**, and using `serial`, `strategy`, and `async` for robust application delivery.

### 🔹 `install-pre/`

Playbooks for **pre-install tasks** like creating users, setting permissions, configuring environments, or validating system readiness.

### 🔹 `j2templates/`

Usage of **Jinja2 templates** to dynamically render configuration files like `nginx.conf`, `.env`, or `systemd` unit files based on variables.

### 🔹 `project/`

The **final end-to-end project deployment**, bringing together all the previous concepts. This simulates a real-world application setup with proper roles, handlers, conditionals, secure vars, templates, and error handling.

### 🔹 `roles/python/tasks/`

A demonstration of using the **roles directory structure**, allowing task separation, reuse, and modularity. This is essential for production-grade Ansible.

### 🔹 `install.yml`

A basic installation playbook to **quickly bootstrap packages or services**. Acts as an example for beginner users.

### 🔹 `inventory.ini`

The **inventory file** defining your managed hosts. Supports grouping and targeting specific sets of machines.

### 🔹 `ansible.cfg`

Customized Ansible behavior like disabling host key checking, default inventory path, retry file location, etc.

### 🔹 `playbook.yml`

A **master playbook** or an entry point for chaining together roles or task files.

---

## 🔍 What You'll Learn

| Concept                     | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| ✅ **Ping & Basic Commands** | Using `ansible` ad-hoc mode to ping hosts or gather system info |
| 🔁 **Handlers**             | Restart services when configuration changes                     |
| ⚙️ **Service Management**   | Start/stop/restart system services via playbooks                |
| 🔐 **Ansible Vault**        | Securely store secrets and credentials                          |
| 🤖 **Conditionals**         | Run tasks only if conditions are met                            |
| 🔄 **Loops & Iteration**    | Efficiently apply tasks to multiple targets                     |
| 📦 **Roles**                | Create reusable, modular units of automation                    |
| 🧩 **Templates**            | Dynamically generate config files using variables               |
| 🧯 **Error Handling**       | Use `block`, `rescue`, `always` to handle task failures         |
| 🚀 **Project Deployment**   | Bring everything together to deploy a working app               |

---

## ⚙️ How to Use This Project

### 1. 🔧 Clone the Repository

```bash
git clone https://github.com/AmeerRiyaz/Ansible.git
cd ANSIBLE-WORK
```

### 2. 📝 Edit the Inventory

Open `inventory.ini` and add the IP addresses or hostnames of your target machines.

### 3. 🚀 Run Any Playbook

```bash
ansible-playbook -i inventory.ini install.yml
```

### 4. 🔐 Use Ansible Vault

```bash
ansible-vault create ansible-vault/secure-vars.yml
ansible-playbook -i inventory.ini ansible-vault/secure-playbook.yml --ask-vault-pass

"ansible-vault create  group_vars/my_vault.yml"
enter password 
open editor 
Set Some value or txt or ur secerets
then new files created on the provided dir with the vault.yml with encrypted data 
"ansible-vault view  group_vars/my_vault.yml"
"ansible-vault rekey  group_vars/my_vault.yml"


=========================
get the data frm vault in playbooks
"ansible-playbook -i inventory.ini playbook.yml -e @group_vars/my_vault.yml --ask-vault-pass"

-e ==> is the path of the vault.yml file our encrypted data 
--ask-vault-pass asks the password of the vault for access 



==========================

"openssl rand -base64 2048 > pass_file/ansible_vault.pass"

generate a random base64 password for our vault and playbook 

"ansible-vault create  group_vars/base64_vault.yml --vault-password-file=pass_file/ansible_vault.pass"

create using our base64 pass 

"ansible-vault view  group_vars/base64_vault.yml --vault-password-file=pass_file/ansible_vault.pass"

"ansible-playbook -i inventory.ini playbook.yml -e @group_vars/base64_vault.yml --vault-password-file=pass_file/ansible_vault.pass"

Another way is to create a env varible and run with passing the filepath 
keyword for that env on terminal is "export ANSIBLE_VAULT_PASSWORD=/path"






```

### 5. 🏁 Run Full Project Deployment

```bash
ansible-playbook -i inventory.ini project/deploy.yml
```

---

## 🚀 Final Project Automation

The `project/` folder is where **all the concepts come together** in a single, production-style deployment. It demonstrates:

* Pre-setup of the environment (users, packages)
* Secrets managed with Vault
* Using roles to install Python packages
* Jinja2 templates for app configs
* Handlers for service management
* Conditional logic to apply changes only if needed

This structure mirrors **real DevOps pipelines**, helping you bridge learning and real-world DevOps practice.

---

## 👨‍💻 Author

**Ameer**
  Blockchain Developer

* [🔗 LinkedIn](https://www.linkedin.com/in/ameer-riyaz/)


---

## ⭐ Support & Contributions

If this project helped you learn or save time:

* ⭐ Star this repository
* 🛠️ Fork it to customize or extend
* 🐛 Submit issues or bugs you find
* 📢 Share it with your DevOps peers

---

Let me know if you'd like me to include:

* 📸 Example outputs
* ✅ Sample host provisioning
* 🧪 GitHub Actions for CI testing



