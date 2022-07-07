FROM php:8.0.2-apache

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    npm \
    libpq-dev

RUN docker-php-ext-install mysqli pdo pdo_mysql pdo_pgsql pgsql gd zip bcmath

RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash -

RUN apt-get install -y nodejs

COPY vhost.conf /etc/apache2/sites-available/000-default.conf

RUN chown -R www-data:www-data /var/www

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
