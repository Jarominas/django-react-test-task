#!/bin/bash

# Wait for postgres to be ready
/wait-for-it.sh db 5432

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate

# Create superuser if needed (optional)
# python manage.py createsuperuser --noinput

# Start server
echo "Starting server..."
python manage.py runserver 0.0.0.0:8000
