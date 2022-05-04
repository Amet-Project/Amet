FROM python:3.6

COPY "./requeriments-docker-python.txt" /app/requeriments-docker-python.txt

WORKDIR /app
RUN pip install -r requeriments-docker-python.txt

COPY . /app

EXPOSE 8080
ENTRYPOINT [ "python" ]

CMD ["main.py"]