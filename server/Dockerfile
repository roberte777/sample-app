# Start from the latest Rust base image
FROM rust:latest as builder

# Set the working directory
WORKDIR /rust-server

# Copy our source code into the container
COPY . .

# Build our application
RUN cargo build --release

# Start a new stage
FROM debian:bullseye

# Install openssl
RUN apt-get update \
    && apt-get install -y openssl \
    && rm -rf /var/lib/apt/lists/*

# Get the binary from the build stage
COPY --from=builder /rust-server/target/release/server .

EXPOSE 3001

# Set the command to run our application
CMD ["./server"]
