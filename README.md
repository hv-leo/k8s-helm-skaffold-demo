# k8s-demo
This demo consists of a minimal client-server **Kubernetes application**. 
The front-end is in **React (Javascript)**, and the back-end is in **Cherrypy (Python)**.

To access the application: 
- **Front-end**: ```http://\<hostname\>/client```
- **Backend**: ```http://\<hostname\>/server```

![K8s Demo Web App](https://github.com/LeonardoCoelho71950/k8s-demo/blob/master/docs/k8s-demo-app.png "K8s Demo Web App")

### Installation
- To **build** the demo (build docker images and package the helm chart) : ```.\gradlew buildApp```
- To **build and deploy** the demo into a Kubernetes cluster: ```.\gradlew deployApp```
- To **continuously deploy** the demo: ```skaffold dev```

### Kubernetes Architecture
- Client and Server are running in different Docker **containers**, inside a single **pod**.
- A **service** is exposing the **pod** inside the Kubernetes cluster.
- The **ingress** allows access to the **service** from outside the Kubernetes cluster.

![K8s Demo Architecture](https://github.com/LeonardoCoelho71950/k8s-demo/blob/master/docs/k8s-demo-arch.png "K8s Demo Architecture")

## Authors:
- Leonardo Coelho	- <leonardo.coelho@ua.pt>